import React, { useState } from 'react'

export default function SimpleForm() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const handleForm=(e)=>{
        e.preventDefault();
        console.log("Name : "+name)
        console.log("Password : "+password)
        console.log("Email : "+email)
        setName("")
        setPassword("")
        setEmail("")
    }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/><br/>
        <input type="Email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
