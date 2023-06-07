import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase';

function Gallery() {
  const navigate = useNavigate()
  const [rotate, setRotate] = useState(false);
  const collectionRef = collection(db, "furnitures");
  const [data, setData] = useState([]);

  const getChannelList = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const firebasedata = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(firebasedata)

    } catch (error) {
      console.error("Error getting documents:", error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);



  return (
    <>
      <div className="w-full shadow-lg py-2 lg:py-4 rounded-sm px-2 flex justify-between z-50 backdrop-blur-sm fixed top-0 " >
        <BiArrowBack className="w-8 h-8" onClick={() => navigate(-1)} />
        <a className="flex text-2xl items-center md:text-3xl">
          <h1 className="font-extrabold ">RO<span className="text-lime-600">Y</span>AL</h1>
          <span className="font-thin">WOOD</span>
        </a>
        <button className={`font-semibold flex gap-2 shadow-lg items-center px-5 py-2`} onClick={() => setRotate(!rotate)}>
          Filters<span className="flex items-center font-medium">{'(1)'}
            <MdOutlineKeyboardArrowDown className={"w-6 h-6 cursor-pointer " + (rotate ? "rotate-0" : "-rotate-90")} /></span>
        </button>
      </div>
      <div className='p-4 flex flex-col gap-5 w-screen overflow-hidden relative'>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden mt-24 ${rotate ? "lg:w-[80%]" : "w-full"} duration-500 `}>
          {data.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden border flex items-center shadow-lg p-3">
              <img className="h-auto w-full object-cover" src={item.image} alt="" />
            </div>
          ))}

        </div>

        {/* category select button */}
        <div className={`${rotate ? "right-3" : "-right-96"} top-20  z-40 w-40 lg:w-64 duration-500 backdrop-blur-lg flex flex-col gap-4 justify-center p-5 fixed`}>
          <ul>
            <h1 className="text-xl font-bold">Type</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Indoor</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Outdoor</label>
            </li>
          </ul>
          <ul>
            <h1 className="text-xl font-bold">Room type</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Living</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Bedroom</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Dining</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Studyroom</label>
            </li>
          </ul>
          <ul>
            <h1 className="text-xl font-bold">Category</h1>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Bed</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Sofa</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Table</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Chair</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Swingchair</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Cabinet</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Window</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Door</label>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <label className="cursor-pointer">Other</label>
            </li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Apply</button>
        </div>

      </div>
    </>

  )
}

export default Gallery