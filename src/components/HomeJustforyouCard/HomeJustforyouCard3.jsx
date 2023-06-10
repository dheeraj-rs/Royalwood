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

    <div className=' shadow-lg py-5  border border-gray-300  mt-10 '>

      <div className="pl-2 "> {/* Heading NewArrivals */}
        <p className='text-2xl leading-10 font-[acorn] py-2 '>Just For You</p>
      </div>

      {/* NewArrivals container*/}
      <div className=" h-[20vh] md:h-[25vh] pl-2  overflow-x-auto  ">

        {/* moving div  */}
        <div className="w-max h-full flex gap-5 overflow-x-auto p-5 backdrop-blur-lg">
          {data.map((item) => (
            <div key={item.id} className="w-[200px] md:w-[300px] py-3 flex flex-col rounded-md shadow-lg border ">
              {/* image  */}
              <div className="h-full relative flex items-center justify-center  ">
                <img src={item.image} alt="img"
                  className=" object-contain w-full h-full rounded-sm" />
                <p className='absolute -bottom-3 text-[#070707d8] uppercase text-sm font-semibold'>{item.title}</p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </div>
  )
}

export default HomeJustforyouCard