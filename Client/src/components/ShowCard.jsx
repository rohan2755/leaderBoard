import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ShowCard = ({ item , category}) => {
    
  
  return (
    <div className=''>
      {/* <h1>{item.title}</h1> */}
      {/* {"product/"+product?._id} */}
      <div className="m-4 relative bg-white rounded-lg p-4 shadow-sm min-h-[22px] min-w-[330px] flex flex-col justify-between">
    

        <div className="flex justify-between  items-center mb-2">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
            </svg>
            <span className="text-sm text-gray-500">5425 traders</span>
          </div>
          <img src={item.icon} alt="Yellow Shirt" className="w-8 h-8 rounded-full" />
        </div>
        <h3 className="font-bold text-lg mb-2">{item.question}</h3>
        <div className="flex items-start mb-2">
          <svg className="w-4 h-4 mt-1 mr-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor" />
          </svg>
          <p className="text-sm text-gray-600">
            
            <span className="text-blue-500 ml-1 cursor-pointer">Read more</span>
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded flex-1 font-semibold hover:bg-blue-200 transition"
          >
            Yes
          </button>
          <button
            className="bg-red-100 text-red-800 px-4 py-2 rounded flex-1 font-semibold hover:bg-red-200 transition"
          >
            No
          </button>
        </div>
      </div>
    </div>


  )
}

export default ShowCard