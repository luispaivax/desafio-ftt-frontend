import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const OccupancyChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    fetch("https://sua-api.com/ocupacao-salas")
      .then((res) => res.json())
      .then((data) => {
        setChartData({
          labels: data.map((sala: any) => sala.nome),
          datasets: [
            {
              data: data.map((sala: any) => sala.ocupacao),
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <h2>Ocupação das Salas</h2>
      {chartData ? <Pie data={chartData} /> : <p>Carregando...</p>}
    </div>
  );
};

export default OccupancyChart;
