import React from 'react'

interface Params{
    params:{id:string};
}
const page = ({params}:Params) => {
  return (
    <div>hi ,{params.id}</div>
  )
}

export default page