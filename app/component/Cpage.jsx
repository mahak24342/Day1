"use client"

import React,{useState,useEffect} from 'react'
import TList from '@/app/component/TList'
import { ToastContainer ,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import  axios  from 'axios';
const Cpage = () => {

  const [form,setForm]=useState({title:"", description:"",})
const[todoData,setTodoData]=useState([]);

const fetchTodos=async()=>{
  const response=await axios('/api');
  setTodoData(response.data.todos);
}

const deleteTodo=async(id)=>{

  const response=await axios.delete('/api',{
   params:{ mongoId:id
  }})
toast.success(response.data.msg);

fetchTodos();
}

const completedTodo=async(id)=>{

  const response=await axios.put('/api',{},{
    params:{
      mongoId:id
    }
  })
  toast.success(response.data.msg);
  fetchTodos();
}

useEffect(()=>{
fetchTodos();
},[])
  const onChangei=(e)=>{

    const name=e.target.name;
    const value=e.target.value;
    setForm(form=>({...form,[name]:value}));

  }

  const onSubmitH=async(e)=>{
    e.preventDefault();

    try{
const response=await axios.post('/api',form);

      toast.success(response.data.msg);
      setForm({
        title:"",
        description:"",
      });
await fetchTodos();
    }

    catch(error){

      toast.error("Error");
    }
  }
  return (
    <div>
      <ToastContainer theme='dark' />
      <form  onSubmit={onSubmitH} className="bg-gray-100 p-6 mt-10 rounded-lg shadow-md max-w-lg mx-auto">
  <div className="mb-4">
    <input 
      type="text" 
      placeholder="Say Hieee" 
value={form.title}   name='title'   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 sm:text-sm md:text-base"
   onChange={onChangei} />
  </div>
  <div className="mb-4">
    <textarea 
      placeholder="tell me more girll" 
 value={form.description}     onChange={onChangei}   name='description' className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 sm:text-sm md:text-base"
    ></textarea>
  </div>
  <button 
    type="submit" 
    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors sm:text-sm md:text-base"
  >
    Add Todo
  </button>
</form>
<div className='overflow-x-auto p-5 mt-10'>
  <table className="min-w-full w-full bg-white border border-gray-300 rounded-lg">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Column 1</th>
        <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Column 2</th>
        <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Column 3</th>
        <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Column 4</th>
        <th className="py-2 px-4 border-b text-left text-sm sm:text-base">Column 5</th>
      </tr>
    </thead>
    <tbody>


   {todoData.map((item,index)=>{
    return   <TList key={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} id={index} deleteTodo={deleteTodo}  completedTodo={completedTodo}/>
   })}
    </tbody>
  </table>
</div>
  





    </div>
  )
}

export default Cpage