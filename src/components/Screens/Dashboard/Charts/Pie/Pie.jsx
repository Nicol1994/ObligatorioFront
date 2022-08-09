import ReactApexChart from 'react-apexcharts'
import React from 'react'

const Pie = ({ compras }) => {
  const data = {
    series: [compras],
    options: {
      chart: {
        height: 350,
        type: 'pie'
      },
      labels: ['Compras'],
      legend: {
        position: 'bottom'
      }
    }
  }
  return (
    <div id='chart'>
      <ReactApexChart options={data.options} series={data.series} type='pie' />
    </div>
  )
}

export default Pie
