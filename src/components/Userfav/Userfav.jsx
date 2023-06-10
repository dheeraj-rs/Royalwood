import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { toast } from 'react-toastify';

function Userfav() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const favref = collection(db, `User : ${user?.email}`);
  const furnituresref = collection(db, 'furnitures');

  const [favdata, setFavdata] = useState([]);
  const [favdataid, setFavdataid] = useState([]);

  const [furnituresdata, setFurnituresdata] = useState([]);
  const [favitems, setFavitems] = useState([]);

  useEffect(() => {
    favMap();
    furnituresMap();
  }, [user?.email]);

  // Fav datas map 
  const favMap = async () => {
    try {
      const favDoc = await getDocs(favref);
      const favmapdata = favDoc.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFavdataid(favmapdata.flatMap((item) => item.favId));
      setFavdata(favmapdata.flatMap((item) => item));
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };
  // furnitures data Map
  const furnituresMap = async () => {
    try {
      const furniturDoc = await getDocs(furnituresref);
      const furnituritems = furniturDoc.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFurnituresdata(furnituritems);
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  // favitems filter 
  useEffect(() => {
    const filteredData = furnituresdata.filter((items) =>
      favdataid.includes(items.id)
    );
    setFavitems(filteredData);
  }, [favdataid, furnituresdata]);

  // delete items
  const handleDelete = async (selectid) => {
    try {
      const checkfavid = favdata.filter((items) => items.favId == selectid);
      const itemsid = checkfavid.map((e) => e.id);
      const itemsref = doc(db, `User : ${user?.email}`, itemsid.toString());
      await deleteDoc(itemsref).then( toast.success('Item removed from Fav successfully'))
    } catch (error) {
      console.error('Error removing item from Fav:', error);
      toast.error('Failed to remove item from Fav');
    }
  };

  return (
    <>
      <div className="w-full h-32"></div>
      <nav className="w-full bg-white fixed top-0">
        <div className="w-full h-12 flex items-center gap-4 p-3">
          <BiArrowBack
            className="w-6 h-6"
            onClick={() => {
              navigate(-1);
            }}
          />
          <p className="">My Cart</p>
        </div>

        {/* show add cart items & wishlist */}
        <div className="w-full h-14 flex flex-row">
          <div
            className="w-1/2 flex items-center justify-center border cursor-pointer  border-b-2 border-x-0 border-y-0 border-stone-200"
            onClick={() => navigate('/cart')}
          >
            <p>Your Cart</p>
          </div>
          <div className="w-1/2 flex items-center justify-center border cursor-default  border-b-4 border-x-0 border-y-0 border-blue-700 text-blue-700">
            <p>Your Wish List</p>
          </div>
        </div>

        {/* Address add btn */}
        <div className="w-full h-14 flex px-3 justify-between items-center">
          <p className="text-sm font-light">From Addresses</p>
          <button className="border border-slate-400 rounded-sm max-w-max p-2 text-xs text-blue-700">
            Enter Delivery Pincode
          </button>
        </div>
      </nav>

      <section className="w-full h-auto flex flex-wrap pt-5 lg:p-10 lg:overflow-y-scroll">
        {favitems.map((items) => (
          <div
            key={items.id}
            className="w-[400px] lg:h-[200px] border rounded-md shadow-lg cursor-pointer mx-2 my-4 lg:my-0 flex"
          >
            <div className="lg:h-[200px] w-[30%] lg:w-[40%] overflow-hidden rounded-t-md p-3 relative">
              <img
                src={items.image}
                alt="img"
                className="w-full h-full object-cover"
              />
              <MdFavoriteBorder className="w-6 h-6 absolute top-4 right-4 shadow-sm shadow-blue-gray-900 rounded-full p-1" />
            </div>
            <div className="flex flex-col justify-between p-2 lg:p-4 px-4 items-start w-[70%]">
              <p className="text-xl font-medium lg:font-bold">{items.title}</p>
              <div className="items-center justify-between flex">
                <div className="flex items-center">
                  <p className="mr-1">4.4(42)</p>
                  <span className="text-xs">(42 ratings)</span>
                </div>
              </div>
              <div className="flex gap-1">
                <p className="font-light lg:font-bold">Price ₹{items.price} </p>
                <span className="line-through text-gray-700 "> ₹10699</span>
                <span className="text-green-600">60% off</span>
              </div>
              <p className="text-green-600 font-semibold">{items.offer}</p>
              <p className="text-xs hidden lg:block">Free delivery</p>
              <div className="w-full flex gap-5">
                <button
                  className="shadow-lg text-black py-2 px-2 lg:px-3 border border-black rounded hover:bg-blue-600 mt-2 text-xs"
                  onClick={() => handleDelete(items.id)}
                >
                  REMOVE
                </button>
                <button
                  className="shadow-lg text-black  py-2 px-2 lg:px-3 border border-black  rounded hover:bg-blue-600 mt-2 text-xs"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Userfav;
