import React from 'react';
import { Line } from 'react-chartjs-2';
import useScreenSize from '../Helper/useScreenSize';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Chart.js Line Chart',
    },
  },
  maintainAspectRatio : false,
};

const labels = [
  'January', 'March','May', 'July', 'September', 'November', 'December'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 8, 5, 8, 2, 7, 9],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2, 7, 9, 5, 4, 2, 3, 12, 4, 5, 6, 10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    
  ],
};

const MainChart = () => {

  return (
    <div className='flex flex-col max-w-screen-sm'>
      <h2 className='uppercase font-bold my-2'>Total Revenue</h2>
      <div className={`bg-white w-[90vw] md:w-[65vw] lg:w-[40vw] xl:w-[38vw] 2xl:w-[40vw] h-[50vh]`}>
        <Line options={options} data={data}  />
      </div>
    </div>
  );
};

export default MainChart;
