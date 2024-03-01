import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [7, 5, 5, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};
const RightNavbar = () => {
  return (
    <>
    <div className='flex flex-col max-w-screen-sm'>
      <h2 className='uppercase font-bold my-2'>Top Sold Products</h2>
      <div className='bg-white flex flex-col justify-center items-center w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[35vw] h-[50vh]'>
        <PolarArea data={data} />
      </div>
    </div>
    </>
  )
}

export default RightNavbar
