import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function HomeCategorieCard() {
  const collectionRef = collection(db, 'furnitures');
  const [data, setData] = useState([]);
  const getChannelList = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const firebasedata = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(firebasedata);
    } catch (error) {
      console.error('Error getting documents:', error);
    }
  };

  useEffect(() => {
    getChannelList();
  }, []);

  return (

    <div className="h-[35vh] lg:flex hidden p-2">

      {/* header  */}
      <div className="w-[20vw]  bg-cate flex flex-col items-center text-4xl bg-blue-gray-400 py-10 ">
        <h1 className='' >Indoor</h1><span>furnitures</span>
        <div className=""> <button className=" shadow-sm bg-[#3f4ef4] hover:bg-blue-gray-700 focus:shadow-outline focus:outline-none text-white text-xs py-2 px-4 rounded-sm">View all</button></div>
      </div>
      {/* image container  */}
      <div className="w-[80vw] flex  gap-5 overflow-y-auto pl-2">
        {data.map((item) => (
          <div key={item.id} className="flex gap-5">
            <div className="w-[300px] h-full relative flex gap-5">
              <img src={item.image} alt="img"
                className="object-cover w-full  h-full rounded-sm" />
              <p className='absolute bottom-0 text-[#ffffffd8] uppercase text-sm font-semibold'>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategorieCard