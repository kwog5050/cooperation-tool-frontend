import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({ chartData }) => {
    let chartArr = [];

    for (let i = 0; i < chartData.length; i++) {
        chartArr.push(
            1 + (chartData[i] / 1.666666666666666666666667)
        )
    }

    const data = {
        type: "radar",
        labels: ['', '', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [chartArr[0], chartArr[1], chartArr[2], chartArr[3], chartArr[4], chartArr[5]],
                backgroundColor: '#38c9d244',
                borderColor: '#38c9d2',
                borderWidth: 1,
                pointStyle: false,
                capBezierPoints: false,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                    lineWidth: 1,
                    color: '#e2e2e2'
                },
                gridLines: {
                    display: true,
                    lineWidth: 1,
                    color: '#e2e2e2',
                },
                ticks: {
                    display: false,
                    stepSize: 1,
                },
            },
        },
        scale: {
            suggestedMin: 0,
            suggestedMax: 4,
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <Radar data={data} options={options} />
    );
};

export default RadarChart;