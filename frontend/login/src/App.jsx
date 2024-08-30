import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function App() {

  const navigate = useNavigate()

  const [user,setuser]=useState("")
  const [pass,setpass]=useState("")
  const [email,setemail]=useState("")
  const [contact,setcontact]=useState("")

  const handleuser=(evt)=>{
    setuser(evt.target.value)
  }

  const handleemail=(evt)=>{
    setemail(evt.target.value)
  }

  const handlecontact=(evt)=>{
    setcontact(evt.target.value)
  }

  const handlepass=(evt)=>{
    setpass(evt.target.value)
  }

  const check=()=>{
    var logindetails=axios.post("http://localhost:5000",{"username":user,"password":pass,"email":email,"contact":contact})
    logindetails.then((response)=>{
      if(response.data=== true)
      {
        navigate("/success")
      }
      else
      {
        navigate("fail")
      }
    })
  }

  return (
    <>
     <div className="flex justify-center">
      <div className="shadow-md border rounded-md p-5 px-10 mt-20 md:mt-48">
      <table>
        <h1 className="text-3xl text-blue-500 text-center mb-2">Login</h1>
        <tr>
          <td><label>Name</label></td>
        </tr>
        <tr>
          <td><input  onChange={handleuser} type="text" className="border border-gray-300 w-60 p-1 focus:outline-none rounded-md"/></td>
        </tr>

        <tr>
          <td><label>Email</label></td>
        </tr>
        <tr>
          <td><input onChange={handleemail} type="email" className="border border-gray-300 w-60 p-1 focus:outline-none rounded-md"/></td>
        </tr>

        <tr>
          <td><label>Contact</label></td>
        </tr>
        <tr>
          <td><input onChange={handlecontact} type="email" className="border border-gray-300 w-60 p-1 focus:outline-none rounded-md"/></td>
        </tr>

        <tr>
          <td><label>Password</label></td>
        </tr>
        <tr>
          <td><input onChange={handlepass} type="password" className="border border-gray-300 w-60 p-1 focus:outline-none rounded-md"/></td>
        </tr>

        <tr>
          <td className="flex justify-center mt-2"><button onClick={check} className="bg-blue-500 w-32 p-1 rounded-md text-white">Login</button></td>
        </tr>
      </table>
      </div>
     </div>
    </>
  )
}

export default App
