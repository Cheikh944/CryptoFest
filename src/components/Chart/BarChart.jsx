import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const barChart = ({ data, min, max }) => {
  return (
    <ResponsiveContainer width="95%" height="80%">
      <BarChart
        width={550}
        height={220}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="day" tick={{ fill: "#fff", fontSize: "12px" }} />
        <YAxis type="number" domain={[min, max]} tick={{ fill: "#fff", fontSize: "13px" }} />
        <Bar dataKey="price" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default barChart;
