import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function AdminAddproducts() {
  const storage = getStorage();
  const collectionRef = collection(db, 'furnitures');
  const inputRef = React.useRef(null);
  const [description, setDescription] = useState('');
  const [productID, setProductID] = useState('')
  const [productname, setProductname] = useState('');
  const [productMRP, setProductMRP] = useState('');
  const [imageupload, setImageupload] = useState(null);
  const [showupload, setShowupload] = useState(null);
  const [showbtn, setShowbtn] = useState(false);
  const [filename, setFilename] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState({
    Indoor: false,
    Outdoor: false,
    Living: false,
    Bed: false,
    Sofa: false,
    Bedroom: false,
    Dining: false,
    Table: false,
    Chair: false,
    Studyroom: false,
    Swingchair: false,
    Cabinet: false,
    Window: false,
    Door: false,
    Other: false,
  });

  const postData = async () => {
    try {
      await addDoc(collectionRef, {
        title: productname,
        categories: Object.keys(categories).filter((key) => categories[key]),
        price: productMRP,
        image: showupload,
        details: description,
        fileName: filename,
        id: productID,
      });
      toast.success('Product Adding successfully');
      setProductname('');
      setProductMRP('');
      setDescription('')
      setFilename('')
      setShowupload(null);
      setImageupload(null);
      setShowbtn(false)
      inputRef.current.value = null;
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const uploadFile = () => {
    if (!imageupload) return;
    setIsLoading(true);

    const storageRef = ref(storage, `images/${imageupload.name}`);
    uploadBytes(storageRef, imageupload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setShowupload(url);
            setIsLoading(false)
            setShowbtn(true)
            setFilename(imageupload.name)
            toast.success('Product Apply successfully!');
          })
          .catch((error) => {
            console.error('Error getting download URL:', error);

            setIsLoading(false)
          });
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        setIsLoading(false)
      });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: checked,
    }));
  };

  return (
    <div className="flex justify-between items-center w-full h-full px-10 bg-blue-gray-400  bg-cover bg-center  text-white">
      <div className="w-[40%] h-full flex items-center justify-center">
        {/* Image Preview */}
        {imageupload && (
          <img
            src={URL.createObjectURL(imageupload)}
            alt="Product Preview"
            className='rounded-md w-96 h-96 '
          />
        )}
      </div>

      <div className="rounded-lg md:w-[50%] p-5 flex flex-col gap-3 bg-[#000000a5] opacity-80 " >
        <p className="text-xl font-bold">ADD PRODUCT</p>

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
        {/* Product id */}
        <div>
          <label htmlFor="productName" className="text-sm font-medium">
            Product id
          </label>
          <input
            className="border border-gray-900 bg-gray-300 px-2 py-1 w-full text-black"
            type="number"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </div>

        {/* Types */}
        <div className="flex flex-col">
          <div className='flex flex-col items-center gap-3'>
            <h1>Category : </h1>
            <div className="flex flex-wrap gap-2">

              <label htmlFor="productCategoryIndoor" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryIndoor"
                  name="Indoor"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Indoor}
                  onChange={handleCheck}
                />
                Indoor
              </label>

              <label htmlFor="productCategoryLiving" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryLiving"
                  name="Living"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Living}
                  onChange={handleCheck}
                />
                Outdoor
              </label>
              <label htmlFor="productCategorySwingchair" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategorySwingchair"
                  name="Swingchair"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Swingchair}
                  onChange={handleCheck}
                />
                Living
              </label>
              <label htmlFor="productCategoryBedroom" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryBedroom"
                  name="Bedroom"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Bedroom}
                  onChange={handleCheck}
                />
                Bedroom
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryDining"
                  name="Dining"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Dining}
                  onChange={handleCheck}
                />
                Dining
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategorySofa"
                  name="Sofa"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Sofa}
                  onChange={handleCheck}
                />
                Sofa
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryBed"
                  name="Bed"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Bed}
                  onChange={handleCheck}
                />
                Bed
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryChair"
                  name="Chair"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Chair}
                  onChange={handleCheck}
                />
                Chair
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryCabinet"
                  name="Cabinet"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Cabinet}
                  onChange={handleCheck}
                />
                Cabinet
              </label>
              <label htmlFor="productCategoryDining" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryTable"
                  name="Table"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Table}
                  onChange={handleCheck}
                />
                Table
              </label>
              <label htmlFor="productCategoryStudyroom" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryStudyroom"
                  name="Studyroom"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Studyroom}
                  onChange={handleCheck}
                />
                Studyroom
              </label>
              <label htmlFor="productCategoryOutdoor" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryOutdoor"
                  name="Outdoor"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Outdoor}
                  onChange={handleCheck}
                />
                Swingchair
              </label>
              <label htmlFor="productCategoryWindow" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryWindow"
                  name="Window"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Window}
                  onChange={handleCheck}
                />
                Window
              </label>
              <label htmlFor="productCategoryDoor" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryDoor"
                  name="Door"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Door}
                  onChange={handleCheck}
                />
                Door
              </label>
              <label htmlFor="productCategoryOther" className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  id="productCategoryOther"
                  name="Other"
                  className="mr-2 h-4 w-4 text-indigo-600"
                  checked={categories.Other}
                  onChange={handleCheck}
                />
                Other
              </label>
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
            Image Upload :
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            ref={inputRef}

            onChange={(e) => setImageupload(e.target.files[0])}
          />

        </div>
        {/* Submit Button */}
        {showbtn ? (<button
          className="border bg-green-600 text-white px-4 py-2 rounded-md disabled:opacity-50 "
          onClick={postData}>submit</button>)
          : (<button
            className="border bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 animate-pulse"
            disabled={!productname || !productMRP || !imageupload}
            onClick={uploadFile}> {isLoading ? 'Uploading...' : 'Apply'}</button>)}

      </div>

    </div>
  );
}

export default AdminAddproducts;
