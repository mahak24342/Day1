"use client"
import React,{useState,FormEvent} from 'react'
import { useRouter } from 'next/navigation';
const page = () => {

  const [input,setInput]=useState("");
const {push}=useRouter();
  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();
push(`/token/${input}` )
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 uppercase">Enter your name</h1>
      </div>

      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="SAYY" 
          className="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
   value={input}    onChange={(e)=>setInput(e.target.value)} />
        <button 
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default page
