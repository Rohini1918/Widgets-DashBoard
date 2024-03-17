import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import '../chart/chart.css';
import Data from '../../../../json_data/data.json';

function Linechart() {
  const coOrdinatesData = Data.filter((widget) => widget.name === 'widget-008')[0]["co-ordinates_data"];

  const [data, setData] = useState(coOrdinatesData.map((item, index) => ({
    id: item.name,
    color: ['#FF8E8E', '#5E5ADB', '#54D787', '#82D1DB', '#F0AB24'][index],
    data: [item.Google, item.Instagram, item.Facebook, item.TikTok],
    fill: false,
  })));

  const xLabels = ['Google', 'Instagram', 'Facebook', 'TikTok']; // Define x-axis labels
  const options = {
    borderWidth: 1,
    xaxis: {
      gridLines: {
        display: true,
      },
      labels: {
        style: {
          colors: '#939393',
        },
      },
      categories: ['Google', 'Instagram', 'Facebook', 'TikTok']
    },
    yaxis: {
      min: 0,
      gridLines: {
        display: true,
      },
      labels: {
        style: {
          colors: '#939393',
          textAlign: 'center',
          fontFamily: 'geist',
        },
        formatter: function (value) {
          if (value === 0) {
            return 0;
          } else if (value === 10000) {
            return '10k';
          } else if (value === 20000) {
            return '20k';
          } else if (value === 30000) {
            return '30k';
          } else if (value === 40000) {
            return '40k';
          } else {
            return '';
          }
        },
      },
    },
  };
  console.log(options.xaxis.categories[2])
  return (
    <React.Fragment>
      <div className='w8_chart'>
        <Chart
          type='line'
          series={data}
          options={options}
          height={340}
          width={210}
        />
      </div>
    </React.Fragment>
  );
}

export default Linechart;
