import React,{useState} from 'react';
import Chart from 'react-apexcharts';
import '../chart/chart.css'
function Linechart()
{
    const[data, setData]= useState(
        [
            {
                name:"Christmas25",
                color : '#FF8E8E',
                data:[11000, 5000, 9000, 6000],
                fill : false,
            },
            {
              name:"BirthdaySpecial25",
              data:[20000, 28000, 6000, 8000],
              fill : false,
              color: '#5E5ADB',
              borderWidth: 10,
            },
            {
              name:"Newuser30",
              data:[38000, 11000, 12000, 25000],
              fill : false,
              color : '#5FDC8F',
              borderWidth: 10,
            }
        ]
    );
    const options = {
        borderWidth: 1,
        xaxis: {
            gridLines: {
                display: true, // Display vertical grid lines
            },
            categories: ['Google', 'Instagram', 'Facebook', 'TikTok'], // Names for the x-axis labels
          },
        yaxis: {
            min: 0,
            gridLines: {
                display: true, // Display horizontal grid lines
            },
          labels: {
            formatter: function(value) {
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
              }
          }
        }
    };
    return(<React.Fragment>
        <div className='w1_chart'>       
          <Chart type='line'
          series={data}
          options={options}
          height={240}
          width={180}
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;