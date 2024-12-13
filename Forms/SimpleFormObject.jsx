import React, { useState } from 'react'

export default function SimpleFormObject() {
    const [input,setInput]=useState({
        name:"",
        password:"",
        email:""
    })
    const handleForm=(e)=>{
      e.preventDefault();
      console.log(input.name,input.password,input.email)
      setInput({
        name:"",
        password:"",
        email:""
      })
    }
  return (
    <div>
     <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter Name" value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}/>
        <br/><br/>
        <input type="password" placeholder="Enter Password" value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}/>
        <br/><br/>
        <input type="Email" placeholder="Enter Email" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
