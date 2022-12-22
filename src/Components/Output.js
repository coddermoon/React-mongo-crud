import React, { useState } from "react";
import Modal from "./MOdal/Modal";

const Output = ({data,handleDelete}) => {
    const [id,setId] = useState('')
    let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(id) {
    setId(id)
    setIsOpen(true)


  }







  return (
    <div className="px-1 py-5 md:px-10 mx-auto">
      <div className="table shadow-2xl">
        <table className="p-2 w-[600px] mx-auto ">
          <thead className="p-[25px]">
            <tr className="bg-slate-900 py-8 text-white">
              <th className="py-2">Name</th>
              <th>Sectors</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* body section */}
          <tbody>

{
    data.map(tr=>  <tr className=" py-8 text-white text-center bg-slate-800 shadow-md">
    <td className="py-3">{tr.name}</td>
    <td>{tr.service}</td>

    <td className=" ">
      <button onClick={()=>handleDelete(tr._id)} className="mr-4 text-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          ></path>
        </svg>
      </button>
      <button  onClick={()=>openModal(tr._id)}>
        <label for="editData">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            ></path>
          </svg>
        </label>
      </button>


    </td>
  </tr> )
}

          
          </tbody>
        </table>
      </div>

      {
        isOpen &&   
            <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        id={id}

        />
      }

    </div>
  );
};

export default Output;
