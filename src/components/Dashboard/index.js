import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from "recharts";
import * as C from "./styles";

const Dashboard = ({ transactionsList }) => {
  // Dados para o gráfico de barras
  const barData = transactionsList.map((transaction) => ({
    name: transaction.desc,
    value: parseFloat(transaction.amount),
    type: transaction.expense ? "Saída" : "Entrada",
  }));

  // Dados para o gráfico de pizza
  const totals = transactionsList.reduce(
    (acc, transaction) => {
      if (transaction.expense) {
        acc.expense += parseFloat(transaction.amount);
      } else {
        acc.income += parseFloat(transaction.amount);
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const pieData = [
    { name: "Entradas", value: totals.income },
    { name: "Saídas", value: totals.expense },
  ];

  // Organizar dados para o gráfico de linhas
  const lineData = transactionsList.map((transaction) => ({
    date: transaction.date,
    amount: parseFloat(transaction.amount),
    type: transaction.expense ? "Despesa" : "Receita",
  }));

  // Agrupar dados por data
  const groupedData = lineData.reduce((acc, cur) => {
    const date = cur.date;
    if (!acc[date]) {
      acc[date] = { date, Receita: 0, Despesa: 0 };
    }
    acc[date][cur.type] += cur.amount;
    return acc;
  }, {});

  const formattedData = Object.values(groupedData);

  return (
    <C.Container>
      <h2>Dashboard de Entradas e Saídas</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: 400 }}>
        <ResponsiveContainer width="50%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill="#82ca9d"  // Verde para Entradas
              stackId="a"
              barSize={30}
              isAnimationActive={false}
            >
              {barData.map((entry, index) => (
                entry.type === 'Entrada' ? (
                  <Cell key={`cell-${index}`} fill="#46cd45" />
                ) : (
                  <Cell key={`cell-${index}`} fill="#cd4545" />
                )
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="50%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Receita"
              stroke="#46cd45" // Verde para Receitas
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Despesa"
              stroke="#cd4545" // Vermelho para Despesas
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </C.Container>
  );
};

export default Dashboard;
