import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

function HomeJustforyouCard() {
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

    <div className='border border-blue-gray-200 border-b-0 shadow-lg py-5 lg:bg-white'>

      <div className="pl-2 "> {/* Heading NewArrivals */}
        <p className='text-2xl leading-10 font-[acorn] py-2 '>Just For You</p>
      </div>

      {/* NewArrivals container*/}
      <div className=" h-[20vh] md:h-[25vh] pl-2  overflow-x-auto ">

        {/* moving div  */}
        <div className="w-max h-full flex gap-3 overflow-x-auto">
          {data.map((item) => (
            <div key={item.id} className="w-[200px] md:w-[300px] flex flex-col ">
              {/* image  */}
              <div className="h-full relative flex items-center justify-center  ">
                <img src={item.image} alt="img"
                  className="object-cover w-full h-full rounded-sm" />
                <p className='absolute bottom-0 text-[#ffffffd8] uppercase text-sm font-semibold'>{item.title}</p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeJustforyouCard