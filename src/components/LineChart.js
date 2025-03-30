import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { chartDataMap } from './dummyChartData';
import { useRef, useState } from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const LineChart = ({ range }) => {
  const prices = chartDataMap[range];
  const labels = prices.map((_, i) => `${range} ${i + 1}`);
  const chartRef = useRef();
  const [hoverPrice, setHoverPrice] = useState(null);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: prices,
        fill: true,
        borderColor: '#4B49F9',
        backgroundColor: ctx => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, 'rgba(75, 73, 249, 0.2)');
          gradient.addColorStop(1, 'rgba(75, 73, 249, 0)');
          return gradient;
        },
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: context => {
          const tooltipModel = context.tooltip;
          if (tooltipModel.dataPoints?.length) {
            const price = tooltipModel.dataPoints[0].parsed.y;
            setHoverPrice(price);
          } else {
            setHoverPrice(null);
          }
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#ddd',
          borderDash: [5, 5],
        },
        ticks: { display: false },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '320px' }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>

      {/* Hover price label on right */}
      {hoverPrice !== null && (
        <div
          style={{
            position: 'absolute',
            top: `calc(${getHoverY(chartRef)}px - 15px)`,
            right: 0,
            backgroundColor: '#1A2036',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '6px',
            fontWeight: 500,
            fontSize: '14px',
            pointerEvents: 'none',
          }}
        >
          {hoverPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          marginTop: '10px',
          padding: '0 20px',
        }}
      >
        <span>{Math.max(...prices).toLocaleString()}</span>
        <span>{prices[prices.length - 1].toLocaleString()}</span>
      </div>
    </div>
  );
};

const getHoverY = chartRef => {
  if (!chartRef.current) return 0;
  const tooltip = chartRef.current?.tooltip;
  if (!tooltip || !tooltip._active?.length) return 0;
  return tooltip._active[0].element.y;
};

export default LineChart;
