
import { Firebase } from "./Config";

function Cart() {
  return (
    <div className='w-full h-full'>
      <button
      className='bg-cyan-600'
        onClick={() => {
          Firebase.firestore().collection('products').get().then((snapshot) => {
              snapshot.forEach((element) => {
                console.log(element.data());
              });
            });
        }}
        
      >
        Click
      </button>
    </div>
  );
}

export default Cart;
