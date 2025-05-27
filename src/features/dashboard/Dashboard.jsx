
import React from 'react';

import MonthlyInteractionsChart from '../../shared/charts/MonthlyInteractionsChart';
import WeightChart from '../../shared/charts/WeightChart';
import VideoPlayer from '../../shared/components/VideoPlayer';
import PieChart from '../../shared/charts/PieChart';

export default function Dashboard() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <MonthlyInteractionsChart />
      <PieChart />
      <WeightChart />
      <VideoPlayer />
    </main>
  );
}
