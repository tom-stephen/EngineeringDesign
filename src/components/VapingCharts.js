import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data extracted from CSV analysis
const neverSmoked_EVER_Data = [
  { year: 2017, Canada: 13.5, England: 11.9, USA: 13.1},
  { year: 2018, Canada: 18.8, England: 12.0, USA: 15.9},
  { year: 2019, Canada: 24.5, England: 15.6, USA: 25.4},
];
const neverSmoked_30DAYS_Data = [
  { year: 2017, Canada: 2.3, England: 1.6, USA: 2.4},
  { year: 2018, Canada: 4.7, England: 1.7, USA: 5.8},
  { year: 2019, Canada: 6.8, England: 3.0, USA: 7.4},
];
const neverSmoked_PASTWEEK_Data = [
  { year: 2017, Canada: 0.8, England: 0.5, USA: 1.1},
  { year: 2018, Canada: 2.6, England: 0.4, USA: 2.9},
  { year: 2019, Canada: 4.0, England: 1.4, USA: 4.4},
];
const neverSmoked_20DAYS30_Data = [
  { year: 2017, Canada: 0.2, England: 0.2, USA: 0.4},
  { year: 2018, Canada: 0.4, England: 0.1, USA: 1.2},
  { year: 2019, Canada: 1.0, England: 0.3, USA: 1.8},
];

const currentSmokers_EVER_Data = [
  { year: 2017, Canada: 79.8, England: 86.7, USA: 85.4},
  { year: 2018, Canada: 76.7, England: 85, USA: 81.3},
  { year: 2019, Canada: 86.7, England: 84.9, USA: 91},
];
const currentSmokers_30DAYS_Data = [
  { year: 2017, Canada: 34.8, England: 35.7, USA: 55.2},
  { year: 2018, Canada: 43.7, England: 38.9, USA: 56.3},
  { year: 2019, Canada: 60.1, England: 49.2, USA: 66},
];
const currentSmokers_PASTWEEK_Data = [
  { year: 2017, Canada: 28.8, England: 22.2, USA: 36.3},
  { year: 2018, Canada: 33.8, England: 22.7, USA: 45.7},
  { year: 2019, Canada: 44.7, England: 33.1, USA: 54.7},
];
const currentSmokers_20DAYS30_Data = [
  { year: 2017, Canada: 13.8, England: 8, USA: 13.9},
  { year: 2018, Canada: 17, England: 11.6, USA: 17},
  { year: 2019, Canada: 24.6, England: 15.6, USA: 24.8},
];

const experimentalSmokers_EVER_Data = [
  { year: 2017, Canada: 58.7, England: 61.2, USA: 65.5},
  { year: 2018, Canada: 62.9, England: 60, USA: 66.7},
  { year: 2019, Canada: 73.5, England: 65.9, USA: 77.9},
];
const experimentalSmokers_30DAYS_Data = [
  { year: 2017, Canada: 18.2, England: 15.2, USA: 24.4},
  { year: 2018, Canada: 26.2, England: 16.0, USA: 33.1},
  { year: 2019, Canada: 37.6, England: 23.6, USA: 36.7},
];
const experimentalSmokers_PASTWEEK_Data = [
  { year: 2017, Canada: 11.0, England: 7.5, USA: 13.5},
  { year: 2018, Canada: 16.3, England: 8.3, USA: 22.5},
  { year: 2019, Canada: 26.1, England: 11.7, USA: 25.1},
];
const experimentalSmokers_20DAYS30_Data = [
  { year: 2017, Canada: 3.6, England: 2.1, USA: 4.0},
  { year: 2018, Canada: 4.9, England: 3.4, USA: 7.8},
  { year: 2019, Canada: 13.2, England: 4.3, USA: 14.0},
];

const totalSmokers_EVER_Data = [
  { year: 2017, Canada: 29.3, England: 33.7, USA: 31.3},
  { year: 2018, Canada: 33.2, England: 33.1, USA: 33.1},
  { year: 2019, Canada: 40.6, England: 36.1, USA: 43.6},
];
const totalSmokers_30DAYS_Data = [
  { year: 2017, Canada: 8.4, England: 8.7, USA: 11.1},
  { year: 2018, Canada: 12.1, England: 9.0, USA: 15.7},
  { year: 2019, Canada: 17.8, England: 12.6, USA: 18.5},
];
const totalSmokers_PASTWEEK_Data = [
  { year: 2017, Canada: 5.2, England: 4.6, USA: 6.4},
  { year: 2018, Canada: 7.5, England: 4.6, USA: 10.3},
  { year: 2019, Canada: 12.3, England: 6.9, USA: 12.6},
];
const totalSmokers_20DAYS30_Data = [
  { year: 2017, Canada: 1.8, England: 1.5, USA: 2.2},
  { year: 2018, Canada: 2.4, England: 2.0, USA: 3.8},
  { year: 2019, Canada: 5.7, England: 2.7, USA: 6.7},
];

const dataMap = {
  "never-smoked": {
    "ever-vaped": neverSmoked_EVER_Data,
    "never-vaped-past-30": neverSmoked_30DAYS_Data,
    "vaped-past-week": neverSmoked_PASTWEEK_Data,
    "vaped-20-in-20": neverSmoked_20DAYS30_Data,
  },
  "smoking-currently": {
    "ever-vaped": currentSmokers_EVER_Data,
    "never-vaped-past-30": currentSmokers_30DAYS_Data,
    "vaped-past-week": currentSmokers_PASTWEEK_Data,
    "vaped-20-in-20": currentSmokers_20DAYS30_Data,
  },
  "smoking-experimentally": {
    "ever-vaped": experimentalSmokers_EVER_Data,
    "never-vaped-past-30": experimentalSmokers_30DAYS_Data,
    "vaped-past-week": experimentalSmokers_PASTWEEK_Data,
    "vaped-20-in-20": experimentalSmokers_20DAYS30_Data,
  },
  "total-sample": {
    "ever-vaped": totalSmokers_EVER_Data,
    "never-vaped-past-30": totalSmokers_30DAYS_Data,
    "vaped-past-week": totalSmokers_PASTWEEK_Data,
    "vaped-20-in-20": totalSmokers_20DAYS30_Data,
  },
};

const getChartTitle = (dataSet, graphCategory) => {
  // You could add more logic for nicer naming if desired
  const dataSetTitles = {
    "never-smoked": "Never Smoked",
    "smoking-currently": "Smoking Currently",
    "smoking-experimentally": "Smoking Experimentally",
    "total-sample": "Total Sample",
  };
  const categoryTitles = {
    "ever-vaped": "Ever Vaped",
    "never-vaped-past-30": "Vaped in Past 30 Days",
    "vaped-past-week": "Vaped in Past Week",
    "vaped-20-in-20": "Used e-cig ≥20 Days in Past 30 Days",
  };
  return `${dataSetTitles[dataSet]} - ${categoryTitles[graphCategory]}`;
};

const ChartContainer = ({ title, data, yLabel }) => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Lighten or remove CartesianGrid if you want fewer grid lines */}
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: yLabel, angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Canada" stroke="#0a66c2" strokeWidth={2} />
          <Line type="monotone" dataKey="England" stroke="#ff5733" strokeWidth={2} />
          <Line type="monotone" dataKey="USA" stroke="#000000" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const VapingCharts = ({ dataSet, graphCategory }) => {
  // Retrieve the correct dataset from our lookup
  const selectedData = dataMap[dataSet]?.[graphCategory] || [];
  const chartTitle = getChartTitle(dataSet, graphCategory);
  
  useEffect(() => {
    console.log("Updated dataSet:", dataSet);
    console.log("Updated graphCategory:", graphCategory);
    console.log("Selected Data:", selectedData);
  }, [dataSet]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Render the Chart */}
      <ChartContainer title={chartTitle} data={selectedData} yLabel="Percentage" />
    </div>
  );
};

export default VapingCharts;
