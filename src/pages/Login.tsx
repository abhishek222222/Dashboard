import { useState } from "react"
import { FcGoogle } from "react-icons/fc"


const Login = () => {
  const [gender,setgender] = useState("")
  const [date,setdate] = useState('')
  return (
    <div className=" login">
      <main> 
        <h1 className="heading"> login</h1>



        <div> 
          <label> Gender</label>
          <select value = {gender}
          onChange={(e) => setgender(e.target.value)}> 
          <option value = ""> select gender</option>
          <option value = "Male"> Male</option>
          <option value = "Female"> Female</option>

          </select>
        
          </div>
          <div> 
          <label> Date of Birth</label>
        <input type ={date}
        value = {date}
        onChange= {((e)=> setdate(e.target.value))}> 
        
        </input>
       
        </div>

     <div> 
      <p> 
        Already signed in once 
      </p>
      <button> <FcGoogle></FcGoogle>
      <span> Sign in with google </span></button>
     </div>


      </main>
      
    </div>
  )
}

export default Login
