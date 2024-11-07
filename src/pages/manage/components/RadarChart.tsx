import React from "react";
import ReactApexChart from "react-apexcharts";

import { ApexOptions } from "apexcharts";

const RadarChart = () => {
  const chartOptions : ApexOptions ={
    chart: {
      type: "radar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#1E90FF", "#32CD32"], // Blue and Green for Allocated Budget and Actual Spending
    labels: [
      "Sales",
      "Marketing",
      "Development",
      "Customer Support",
      "Technology",
      "Administration",
    ],
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.2,
    },
    markers: {
      size: 4,
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      labels: {
        colors: "#333",
      },
    },
    yaxis: {
      show: false, // Hides the y-axis values inside the radar
    },
  };

  const chartSeries = [
    {
      name: "Allocated Budget",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Actual Spending",
      data: [70, 60, 40, 50, 80, 30],
    },
  ];

  return (
    <div className="">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="radar"
        height={300}
      />
    </div>
  );
};

export default RadarChart;
