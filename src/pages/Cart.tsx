import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const cartItem = [{
  productId : "dhjedhueh",
  photo:"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg",
  name : "macbook",
  price : 3000,
  quantity : 4, stock : 10,

}];
const subtotal = 4000;
const tax = Math.round(subtotal*0.8)
const shippingCharges = 200 ;
const discount = 400 ; 
const total = subtotal + tax + shippingCharges

const Cart = () => {
  const [CouponCode, setCouponCode] = useState<string> ();
  const [ IsValid , setIsValid] = useState<boolean>(false);


  useEffect(()=> {
     const timeOutId = setTimeout(()=> {
          if (Math.random() > 0.5) setIsValid(true);
          else setIsValid(false)
     },1000);




    return()=>{
             clearTimeout(timeOutId)
             setIsValid(false)
    }
  },[CouponCode])
  return (
    <div className="cart">
     <main>
        {cartItem.length > 0 ? ( cartItem.map((i, index) =>(<CartItem key={index} cartItem={i}/>))) :(<h1> no item added</h1>)
       }
     </main>
     <aside>
      <p> SubTotal: {subtotal}</p>
      <p> shipping charges : {shippingCharges}</p>
      <p> Tax: { tax}</p>
      <p> Discount <em> {discount}</em> </p>
      <p>
        Total : {total}
      </p>
      <input type = "text" placeholder = "CouponCode"  value = {CouponCode}  onChange={(e) => setCouponCode(e.target.value)}/> 
      {CouponCode && ( IsValid ? (<span className="green "> {discount} of using this coupon code <code >{CouponCode}</code></span>): (<span className="red"> invalid coupon code<VscError></VscError> </span>))}
    

    {  cartItem.length > 0 && <Link to = "/shipping">Checkout </Link>}
     </aside>
    </div>
  )
}

export default Cart
