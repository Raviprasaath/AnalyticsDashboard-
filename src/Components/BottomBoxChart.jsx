import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  maintainAspectRatio : false
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 8, 5, 8, 2, 7, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2, 7, 9, 5, 4, 2, 3, 12, 4, 5, 6, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const BottomBoxChart = () => {
  return (
    <>
    <div className='flex flex-col'>
      <h2 className='uppercase font-bold my-2'>Latest Orders</h2>
      <div className='w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[40vw] h-[50vh] bg-white'>
        <Bar options={options} data={data} />
      </div>
    </div>
    </>
  )
}

export default BottomBoxChart
