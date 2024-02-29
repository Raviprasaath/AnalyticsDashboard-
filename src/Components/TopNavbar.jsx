import React from 'react'

const TopNavbar = () => {
  return (
    <>
      <h2 className='uppercase font-bold py-2'>Current Year</h2>
      <div className='flex gap-4 flex-wrap bg-white p-4 justify-center'>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-blue-100'>
          Total Sales  ₹10.5b
        </div>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-violet-100'>
          Total Earnings ₹7b
        </div>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-green-100'>
          Total Orders 42m
        </div>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-orange-100'>
          Total Margin ₹1b
        </div>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-teal-100'>
          Margin Rate 25%
        </div>
        <div className='flex justify-center items-center rounded-md w-44 h-20 bg-yellow-100'>
          Quantity Returned 500k
        </div>
      </div>
    </>
  )
}

export default TopNavbar
