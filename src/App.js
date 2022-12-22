
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';


import Output from './Components/Output';

function App() {
const [data,setData]= useState([])

// modal functionality



  // load data

  useEffect(()=>{
    fetch(`https://crud-server-fawn.vercel.app/upload`)
    .then(res=>res.json())
    .then(data => setData(data))
  },[data])

  const handleDelete = (id) => {

    fetch(`https://crud-server-fawn.vercel.app/upload/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      const remaining = data.filter(odr => odr._id !== id);
      setData(remaining)
    })

  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <h1 className="text-center my-10 text-xl font-semibold text-white">Please enter your name and pick the Sectors you are currently involved in.</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20">
      <Form/>
      <Output
      data= {data}
      handleDelete= {handleDelete}
    
      />
     
      </div>


     
      
    </div>
  );
}

export default App;
