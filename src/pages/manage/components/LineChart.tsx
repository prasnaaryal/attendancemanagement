import React from 'react'
    import ReactApexChart from "react-apexcharts";
    import { ApexOptions } from "apexcharts";
const LineChart = () => {
    
    
   
    const chartOptions: ApexOptions = {
        chart: {
          id: "lineChart",
          type: "area",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        colors: ["#1E90FF", "#32CD32", "#FFA500"], // Matching colors (blue, green, orange)
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 100],
          },
        },
        markers: {
          size: 5,
        },
        xaxis: {
          categories: [
            "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
          ],
          labels: {
            style: {
              colors: "#333",
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            style: {
              colors: "#333",
              fontSize: "12px",
            },
          },
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "#333",
          },
        },
      };
    
      const chartSeries = [
        {
          name: "Dataset 1",
          data: [20, 35, 40, 50, 45, 60, 55],
        },
        {
          name: "Dataset 2",
          data: [15, 25, 35, 40, 30, 45, 40],
        },
        {
          name: "Dataset 3",
          data: [10, 15, 20, 25, 20, 30, 25],
        },
      ];
    
      return (
        <div className="bg-white ">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="area"
            height={350}
          />
        </div>
      );
    };
    

export default LineChart