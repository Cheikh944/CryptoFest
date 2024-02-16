import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, min, max }) => {
  return (
    <ResponsiveContainer width="95%" height="80%">
      <AreaChart width={550} height={220} data={data}>
        <XAxis dataKey="date" tick={{ fill: "#fff", fontSize: "12px" }} />
        <YAxis
          type="number"
          domain={[min, max]}
          tick={{ fill: "#fff", fontSize: "13px" }}
        />
        <Area type="monotone" dataKey="y" stroke="yellow" fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
