// Corrected type definition
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
interface CartItemProps { 
  cartItem: any; // Ideally, replace `any` with a more specific type
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { photo , productId , name, price , quantity, stock} = cartItem;
  return (
  
      <div className="cart-item">
      <img  src ={photo} alt = {name} />
       <article> 
        <Link to ={`/product/${productId}`}></Link>
        <span> {price}</span>
       </article>
       <div> 
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
        
        </div> 
        <button> <FaTrash></FaTrash></button>
      </div>
  );
}

export default CartItem;
