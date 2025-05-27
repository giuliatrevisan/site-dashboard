import React from 'react';
import { BarChart3, PieChart as PieIcon, Activity } from 'lucide-react';
import PieChart from '../../shared/charts/PieChart';
import MonthlyInteractionsChart from '../../shared/charts/MonthlyInteractionsChart';
import WeightChart from '../../shared/charts/WeightChart';
import VideoPlayer from '../../shared/components/VideoPlayer';

export default function UserData() {
  const summary = [
    {
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      label: 'Interações Mensais',
      value: '1.248'
    },
    {
      icon: <PieIcon className="w-6 h-6 text-green-600" />,
      label: 'Distribuição',
      value: '52% Ativo'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
      label: 'Peso Médio',
      value: '78,2 kg'
    }
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Visualizar Meus Dados</h1>
        <p className="text-gray-600">Acompanhe suas métricas, gráficos e análises.</p>
      </header>

      {/* Cards de resumo */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {summary.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            {item.icon}
            <div>
              <h2 className="text-sm text-gray-500">{item.label}</h2>
              <p className="text-xl font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Gráficos */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Gráfico de Interações</h3>
          <MonthlyInteractionsChart />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Distribuição de Atividades</h3>
          <PieChart />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Histórico de Peso</h3>
          <WeightChart />
        </div>
      </section>

      {/* Vídeo tutorial */}
      <section className="bg-white p-6 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">📺 Dicas e Tutoriais</h3>
        <VideoPlayer />
      </section>
    </main>
  );
}
