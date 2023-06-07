import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { getDocs, collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function AdminEditproducts() {
    const storage = getStorage();
    const collectionRef = collection(db, 'furnitures');
    const inputRef = React.useRef(null);
    const [filename, setFilename] = useState('');
    const [description, setDescription] = useState('');
    const [productname, setProductname] = useState('');
    const [productMRP, setProductMRP] = useState('');
    const [showupload, setShowupload] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Editpage, SetEditpage] = useState(false);
    const [categories, setCategories] = useState({
        Indoor: false,
        Outdoor: false,
        Living: false,
        Bedroom: false,
        Dining: false,
        Studyroom: false,
        Swingchair: false,
        Window: false,
        Door: false,
        Other: false,
        staircase:false,
    });

    const getChannelList = async () => {
        try {
            const querySnapshot = await getDocs(collectionRef);
            const filterdata = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setData(filterdata);
        } catch (error) {
            console.error('Error getting documents:', error);
        }
    };

    useEffect(() => {
        getChannelList();
    }, []);

    const handleEdit = (id) => {
        const selectedProduct = data.find((product) => product.id === id);
        if (selectedProduct) {
            SetEditpage(true);
            setProductname(selectedProduct.title);
            setDescription(selectedProduct.details);
            setProductMRP(selectedProduct.price);
            setShowupload(selectedProduct.image);
            setFilename(selectedProduct.fileName);
            setCategories((prevCategories) => ({
                ...prevCategories,
                ...(selectedProduct.categories
                    ? selectedProduct.categories.reduce((acc, category) => {
                        return { ...acc, [category]: true };
                    }, {})
                    : {}),
            }));
            setEditingId(id);
        }
    };

    const handleDelete = async (id) => {
        try {
            const productRef = doc(db, 'furnitures', id);
            await deleteDoc(productRef);
            toast.success('Product deleted successfully!');
        } catch (error) {
            console.error('Error deleting document:', error);
        }
    };

    const postData = async () => {
        try {
            setIsLoading(true);

            // Update existing document
            const productRef = doc(db, 'furnitures', editingId);
            await updateDoc(productRef, {
                title: productname,
                categories: Object.keys(categories).filter((key) => categories[key]),
                price: productMRP,
                image: showupload,
                details: description,
                fileName: filename,
            });
            setIsLoading(false);
            toast.success('Product updated successfully!');
            SetEditpage(false);

            // Reset form fields and states
            setProductname('');
            setDescription('');
            setFilename('');
            setProductMRP('');
            setShowupload(null);
            setCategories({
                Indoor: false,
                Outdoor: false,
                Living: false,
                Bedroom: false,
                Dining: false,
                Studyroom: false,
                Swingchair: false,
                Window: false,
                Door: false,
                staircase:false,
                Other: false,
            });

            // Fetch updated data
            getChannelList();
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        console.log("🚀 ~ file:", file);
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setFilename(file.name);
        setShowupload(downloadURL);
        toast.success('image upload successfully!');
        const existingImageRef = ref(storage, `images/${filename}`);
        await deleteObject(existingImageRef);
        toast.success('image delete!');
    };

    const handlecancel = async () => {
        setFilename('');
        SetEditpage(false);
        setCategories({
            Indoor: false,
            Outdoor: false,
            Living: false,
            Bedroom: false,
            Dining: false,
            Studyroom: false,
            Swingchair: false,
            Window: false,
            Door: false,
            Other: false,
            staircase:false,
        });
    };

    return (
        <>
            <div className="px-40 py-8 bg-blue-gray-200 overflow-y-auto ">
                <h2 className="text-2xl font-bold mb-4">Existing Products</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <section>
                        <h2 className="text-xl font-bold mb-2">Product List</h2>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2">Name</th>
                                        <th className="border px-4 py-2">MRP</th>
                                        <th className="border px-4 py-2">Category</th>
                                        <th className="border px-4 py-2">Description</th>
                                        <th className="border px-4 py-2">Image</th>
                                        <th className="border px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="border px-4 py-2">{item.title}</td>
                                            <td className="border px-4 py-2">${item.price}</td>
                                            <td className="border px-4 py-2">{item.categories?.join(' , ')}</td>

                                            <td className="border px-4 py-2">{item.details}</td>
                                            <td className="border px-4 py-2">
                                                {item.image && (
                                                    <img src={item.image} alt="item" className="w-24 h-16" />
                                                )}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <div className="flex flex-col md:flex-row md:space-x-2">
                                                    <button
                                                        className="bg-blue-500 text-white py-1 px-4 mb-2 md:mb-0"
                                                        onClick={() => handleEdit(item.id)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="bg-red-500 text-white px-2 py-1"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}
            </div>
            <section
                className={`absolute top-0 ${Editpage ? 'left-0' : 'left-[1500px]'} flex justify-between items-center w-full h-full px-10   bg-cover bg-center duration-500 bg-blue-gray-400   text-white`}
            >
                <div className="w-[40%] h-full flex items-center justify-center">
                    {/* Image Preview */}
                    {showupload && (
                        <img
                            src={showupload}
                            alt="Product Preview"
                            className="rounded-md w-96 h-96 "
                        />
                    )}
                </div>

                <div className="rounded-lg md:w-[50%] p-5 flex flex-col gap-3 bg-[#000000a5] opacity-80 ">
                    <p className="text-xl font-bold">Admin Edit Products</p>

                    {/* Product name */}
                    <div>
                        <label htmlFor="productName" className="text-sm font-medium">
                            Product name
                        </label>
                        <input
                            className="border border-gray-900 bg-gray-300 px-2 py-1 w-full text-black"
                            type="text"
                            value={productname}
                            onChange={(e) => setProductname(e.target.value)}
                        />
                    </div>

                    {/* Types */}
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center gap-3">
                            <h1>Category : </h1>

                            <div className="flex flex-wrap">
                                {Object.entries(categories).map(([category, checked]) => (
                                    <label key={category} className="mr-4">
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            checked={checked}
                                            onChange={(e) =>
                                                setCategories((prevCategories) => ({
                                                    ...prevCategories,
                                                    [category]: e.target.checked,
                                                }))
                                            }
                                        />
                                        {category}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product MRP */}
                    <div>
                        <label htmlFor="productMRP" className="text-sm font-medium ">
                            Product MRP
                        </label>
                        <input
                            className="border border-gray-900 bg-gray-300 px-2 py-1 w-full text-black"
                            type="text"
                            value={productMRP}
                            onChange={(e) => setProductMRP(e.target.value)}
                        />
                    </div>

                    {/* Product Description */}
                    <div>
                        <label htmlFor="productDescription" className="text-sm font-medium">
                            Product Description
                        </label>
                        <textarea
                            className="border border-gray-900 bg-gray-300 px-2 py-1 w-full text-black"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label htmlFor="imageUpload" className="text-sm font-medium px-3">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            ref={inputRef}
                            onChange={handleImageUpload}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="border bg-green-600 text-white px-4 py-2 rounded-md disabled:opacity-50 "
                        onClick={postData}
                        disabled={!productname || !productMRP}
                    >
                        {isLoading ? 'Uploading...' : 'UPDATE'}
                    </button>

                    {/* Cancel Button */}
                    <button
                        className="border bg-red-600 text-white px-4 py-2 rounded-md "
                        onClick={handlecancel}
                    >
                        CANCEL
                    </button>
                </div>
            </section>
        </>
    );
}

export default AdminEditproducts;
