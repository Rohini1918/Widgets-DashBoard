import React from 'react';
import Chart from 'react-apexcharts';
import '../chart/chart.css'
function BarChart() {
  // Data for the bar chart
  const series = [{
    name: 'Bar Chart',
    data: [29500, 44500, 20500, 33500, 26000],
    colors: ['#F1E254', '#FF8E8E', '#96D3FF', '#5FDC8F', '#F182F3', '#5E5ADB']
  }];
  const yaxisLabels = ['0', '5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k'];
  // Options for the bar chart
  const options = {
    chart: {
      type: 'bar',
      height: 201
    },
    plotOptions: {
      bar: {
        horizontal: false,
        distributed: true,
        barHeight: '80%',
        borderRadius: 5, // Set border radius to 5px
        columnWidth: '4px',
        column: {
            width: '28px'
          }
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        show: false // Hide x-axis labels
      }
    },
    yaxis: {
      labels: {
        formatter: function (val) {
            console.log(val);
            return yaxisLabels[val / 5000]; // Divide val by 5000 to get the index of yaxisLabels array
          },
        style: {
          fontSize: '12px'
        }
      },
      min: 0,
      tickAmount: 10
    }
  };

  return (
    <div className="w7_chart">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
