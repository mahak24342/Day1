import React from 'react'


const getAge=async(name:string)=>{
    const res=await fetch(`https://api.agify.io?name=${name}`);
    return res.json();

}

const getGender=async(name:string)=>{
    const res=await fetch(`https://api.genderize.io?name=${name}`);
    return res.json();
}

const getNationn=async(name:string)=>{
    const res=await fetch(`https://api.nationalize.io?name=${name}`);
    return res.json();
};

interface Params{
    params:{name:string};
}
const page = async({params}:Params) => {
    const ageData=getAge(params.name);
    const genderData=getGender(params.name);
    const nationn=getNationn(params.name);

    const [age,gender,nationnal]=await Promise.all([ageData,genderData,nationn]);
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">

    <div className="text-xl font-semibold text-gray-700 mb-4">INFO</div>
  
    <div className="text-gray-600 mb-2">
      Age: <span className="font-medium text-gray-800">{age?.age}</span>
    </div>
  
    <h2 className="text-gray-600 mb-2">
      Gender: <span className="font-medium text-gray-800">{gender?.gender}</span>
    </h2>
  
    <h2 className="text-gray-600">
      Nation: <span className="font-medium text-gray-800">{nationnal?.country[0]?.country_id}</span>
    </h2>
    
  </div>
  
  )
}

export default page