import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', kg: 40 },
  { name: 'Feb', kg: 30 },
  { name: 'Mar', kg: 20 },
  { name: 'Apr', kg: 60 },
];

export default function WeightChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Peso Descartado Mensal</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="kg" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
