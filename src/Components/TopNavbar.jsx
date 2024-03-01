import React from 'react'
import useScreenSize from '../Helper/useScreenSize';
import { useDispatch } from 'react-redux';
import { toggleNavbar } from '../Slice/helperSlice';
import { FaBars } from "react-icons/fa";

const TopNavbar = () => {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();

  const handlerToggler = () => {
    dispatch(toggleNavbar(true));
  }

  return (
    <>
      <div className=' flex flex-col justify-center'>
        <div className='flex items-center gap-4'>
          {screenSize < 900 && 
            <p onClick={handlerToggler} className='cursor-pointer'><FaBars /></p>
          }
          <h2 className='uppercase font-bold py-2'>Current Year</h2>
        </div>
        <div className='flex gap-4 flex-wrap bg-white p-4 justify-center'>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2 justify-center items-center rounded-md bg-blue-100`}>
            <p>
              Total Sales  
            </p>
            <p className='font-bold'>₹10.5b</p>
          </div>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2  justify-center items-center rounded-md bg-violet-100`}>
            <p>
              Total Earnings 
            </p>
            <p className='font-bold'>
              ₹7b
            </p>
          </div>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2  justify-center items-center rounded-md bg-green-100`}>
            <p>
              Total Orders
            </p>
            <p className='font-bold'>
              42m
            </p>
          </div>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2  justify-center items-center rounded-md bg-orange-100`}>
            <p>
              Total Margin
            </p>
            <p className='font-bold'>
              ₹1b
            </p>
          </div>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2  justify-center items-center rounded-md bg-teal-100`}>
            <p>
              Margin Rate 
            </p>
            <p className='font-bold'>
              25%
            </p>
          </div>
          <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex gap-2  justify-center items-center rounded-md bg-yellow-100`}>
            <p>
              Quantity Returned 
            </p>
            <p className='font-bold'>
              500k
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
