import React from 'react';
import { PieChart as MuiPieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '18-25', value: 35 },
  { name: '26-35', value: 40 },
  { name: '36-50', value: 25 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function PieChart() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Percentual por Faixa Etária</h2>
      <ResponsiveContainer width="100%" height={200}>
        <MuiPieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </MuiPieChart>
      </ResponsiveContainer>
    </div>
  );
}