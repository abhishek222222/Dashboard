import { useState } from "react";
import { FaSearch, FaShoppingBag,  FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom" ;





const user ={_id:"iii", role:"admin"};
const Header = () => {
  const [ isOpen , setOpen]= useState<boolean>(false)
  const logoutHandler = ()=>{
    setOpen(false)
  }
  return (
    <div>
    <nav className="header">
   < Link onClick={() => setOpen(false)} to = {"/"}>  Home 
   </Link>
   <Link onClick={() => setOpen(false)} to ={"/search"}>  
     <FaSearch/>
   </Link>
   <Link onClick={() => setOpen(false)} to ={"/cart"}>  
     <FaShoppingBag/>
   </Link>
   {
    user?._id?(<>
    <button onClick={()=>setOpen((prev) => !prev)}><FaUser></FaUser></button>
   <dialog open = {isOpen}>
    {
      user.role === "admin" && (
        <Link onClick={() => setOpen(false)}to = "/admin/dashboard">Admin</Link>
      )
    }
    <Link onClick={() => setOpen(false)} to = "/orders"> Orders</Link>
     <button onClick = {logoutHandler}>
     <FaSignOutAlt></FaSignOutAlt>
     </button>
     </dialog>
    </>):<Link to ={"/login"}>  
    <FaSignInAlt></FaSignInAlt>
  </Link>

   }
    </nav>
    </div>
  )
}

export default Header
