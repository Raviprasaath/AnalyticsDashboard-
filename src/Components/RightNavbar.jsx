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

export const data = {
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
    <div className='flex flex-col w-full'>
      <h2 className='uppercase font-bold my-2'>Top Sold Products</h2>
      <div className='bg-white h-[400px] flex flex-col justify-center items-center'>
        <PolarArea className='w-[300px]' data={data} />
      </div>
    </div>
    </>
  )
}

export default RightNavbar
