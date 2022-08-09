import ReactApexChart from 'react-apexcharts'
import React from 'react'

const Pie = ({ Vintereum, Pesocoin, Monereum, Finance_URU, MvdCoin, Hexagon, Guitchain, Money_Token, MDG}) => {
  const data = {
    series: [Vintereum, Pesocoin, Monereum, Finance_URU, MvdCoin, Hexagon, Guitchain, Money_Token, MDG],
    options: {
      chart: {
        height: 1000,
        type: 'pie'
      },
      labels: ['Vintereum', 'Pesocoin', 'Monereum', 'Finance URU', 'MvdCoin', 'Hexagon', 'Guitchain', 'Money Token', 'MDG'],
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
