"use client"
import React,{useState} from 'react'

const MNac = () => {

    const [open,setOpen]=useState("");
  return (
    <div className='bg-gray-300 p-4'>
        <div className='container mx-auto flex items-center justify-between'>
            <h2>Logo</h2></div>

<div>
    <button onClick={()=>setOpen(!open)} className='md:hidden'>Open</button>

    {open ?(<h2>open</h2>):(<h2>Close</h2>)}
</div>

        <div className='hidden md:flex'>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
        </div>

{open && (
        <div className='md:hidden flex flex-col gap-4 '>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
            <ul>Home</ul>
        </div>

)}



    </div>
  )
}

export default MNac