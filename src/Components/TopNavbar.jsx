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
      <div className='flex items-center gap-4'>
        {screenSize < 900 && 
          <p onClick={handlerToggler} className='cursor-pointer'><FaBars /></p>
        }
        <h2 className='uppercase font-bold py-2'>Current Year</h2>
      </div>
      <div className='flex gap-4 flex-wrap bg-white p-4 justify-center'>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-blue-100`}>
          Total Sales  ₹10.5b
        </div>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-violet-100`}>
          Total Earnings ₹7b
        </div>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-green-100`}>
          Total Orders 42m
        </div>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-orange-100`}>
          Total Margin ₹1b
        </div>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-teal-100`}>
          Margin Rate 25%
        </div>
        <div className={` ${screenSize<900?'text-sm w-36 h-16 px-2':'text-md w-44 h-20 px-3'} flex justify-center items-center rounded-md bg-yellow-100`}>
          Quantity Returned 500k
        </div>
      </div>
    </>
  )
}

export default TopNavbar
