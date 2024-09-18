import React from 'react';

const TList = ({id,title,description,mongoId,complete,deleteTodo,completedTodo}) => {
  return (
    <tr className="text-center bg-white hover:bg-gray-50 transition-colors duration-300">
    <td className="py-3 px-6 border-b text-sm sm:text-base">{id + 1}</td>
    <td className={`py-3 px-6 border-b text-sm sm:text-base ${complete?"line-through":""}`}>{title}</td>
    <td className={`py-3 px-6 border-b text-sm sm:text-base ${complete?"line-through":""}`}>{description}</td>
    <td className="py-3 px-6 border-b text-sm sm:text-base">{complete ? "completed" : "pending"}</td>
    <td className="py-3 px-6 border-b text-sm sm:text-base flex flex-col gap-2 sm:flex-row justify-center items-center">
      <button 
        onClick={() => deleteTodo(mongoId)} 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
        Delete
      </button>
    { complete ?"":  <button onClick={()=>completedTodo(mongoId)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
        Done
      </button>}
    </td>
  </tr>
  
  );
};

export default TList;
