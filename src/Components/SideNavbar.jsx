import React from 'react'

const SideNavbar = () => {
  return (
    <div className='flex flex-col gap-3  p-2  bg-white'>
      <h2 className='uppercase font-bold'>Analytics Dashboard</h2>
      <div className='flex justify-between gap-2'>
        <label htmlFor="lastMonth">Last Month</label>
        <input type="radio" id="lastMonth" name="typeOfPeriod" value="lastMonth" />
      </div>
      <div className='flex justify-between gap-2'>
        <label htmlFor="lastQuarter">Last Quarter</label>
        <input type="radio" id="lastQuarter" name="typeOfPeriod" value="lastQuarter" />
      </div>
      <div className='flex justify-between gap-2'>
        <label htmlFor="currentYear">Current Year</label>
        <input type="radio" id="currentYear" name="typeOfPeriod" value="currentYear" />
      </div>

      <div className='flex flex-col border-b-2'>
        <label>Order Channel</label>
        <select>
          <option value="">None Selected</option>
          <option value="store">Store</option>
          <option value="website">Website</option>
        </select>
      </div>
      <div className='flex flex-col border-b-2'>
        <label>Order Type</label>
        <select>
          <option value="">None Selected</option>
          <option value="store">Cash On Delivery</option>
          <option value="website">Credit Card</option>
          <option value="website">Debit Card</option>
          <option value="website">Gift Card</option>
          <option value="website">UPI</option>
        </select>
      </div>
      <div className='flex flex-col border-b-2'>
        <label>Store State</label>
        <select>
          <option value="">None Selected</option>
          <option value="store">Bengaluru</option>
          <option value="website">Chennai</option>
          <option value="website">Mumbai </option>
          <option value="website">Delhi</option>
          <option value="website">Gujarat</option>
        </select>
      </div>
    </div>
  )
}

export default SideNavbar
