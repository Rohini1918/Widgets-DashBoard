import React from 'react';
import ReactApexChart from 'react-apexcharts';
import '../pie_chart/pie_chart.css'
const PieChart = () => {
  const chartOptions = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    colors: ['#FB8282', '#5E5ADB', '#F2E144', '#54D787'],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function () {
                return '';
              },
            },
            value: {
                display : false,
              show: false,
            },
            total: {
              show: false,
            },
            percentage: {
                display : false,
              show: false,
            },
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
    },
  };

  const chartData = [30, 25, 10 , 35];

  return (
    <div style={{ textAlign: 'center' }}>
      <ReactApexChart
        options={chartOptions}
        series={chartData}
        type="donut"
        width="180"
      />
      <div style={{ position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h2 id='number'>89,000</h2>
        <h3 id='orders'> orders</h3>
      </div>
    </div>
  );
};

export default PieChart;
