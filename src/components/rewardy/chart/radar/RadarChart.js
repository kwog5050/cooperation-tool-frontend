import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';
import { rewardyImage } from 'assets/images/imageConfig';
import * as Style from "./style";

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
        <Style.Graph>
            <div className="chartData">
                <div>
                    <h5>에너지</h5>
                    <span><b>D</b> (<>{chartData[0]}</>)</span>
                </div>
                <div>
                    <h5>성장</h5>
                    <span><b>D</b> (<>{chartData[1]}</>)</span>
                </div>
                <div>
                    <h5>성실</h5>
                    <span><b>D</b> (<>{chartData[2]}</>)</span>
                </div>
                <div>
                    <h5>실행</h5>
                    <span><b>D</b> (<>{chartData[3]}</>)</span>
                </div>
                <div>
                    <h5>협업</h5>
                    <span><b>D</b> (<>{chartData[4]}</>)</span>
                </div>
                <div>
                    <h5>성과</h5>
                    <span><b>D</b> (<>{chartData[5]}</>)</span>
                </div>
            </div>

            <div className="hexagon">
                <img src={rewardyImage.hexagon} alt="육각형" />
                <p>62</p>
            </div>


            <Radar data={data} options={options} />
        </Style.Graph>
    );
};

export default RadarChart;