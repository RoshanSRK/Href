import React, { useContext, useState } from 'react'
import { GraphCtx } from './context/GraphDataContext'
import { formatMoney } from './helpers'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Paper, Text as MantineText, Button, Grid } from '@mantine/core';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Graph() {
    const [graphCtx, setGraphCtx] = useContext(GraphCtx)
    const [chartData, setChartData] = useState({})

    if (graphCtx.values.length === 0) return null;

    const labels = graphCtx.values.map(value => `Year ${value.year}`)
    const totalMoney = graphCtx.values.map(value => value.totalMoney)
    const totalInterest = graphCtx.values.map(value => value.totalInterest)
    const totalPayment = graphCtx.values.map(value => value.totalPayment)

    const tp = formatMoney(totalPayment[totalPayment.length - 1]?.toFixed(0));
    const ti = formatMoney(totalInterest[totalInterest.length - 1]?.toFixed(0));
    const tm = formatMoney(totalMoney[totalMoney.length - 1]?.toFixed(0));

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ''
            },
            tooltip: {
                callbacks: {
                    footer: function (items) {
                        return `Total: ${formatMoney(
                            totalMoney[items[0].dataIndex].toFixed(2)
                        )}`
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'payments',
                data: totalPayment,
                backgroundColor: 'rgba(219, 39, 119, 0.5)'
            },
            {
                label: 'interest',
                data: totalInterest,
                backgroundColor: 'rgba(219, 39, 119, 1)'
            }
        ]
    }

    return (
        <>
        {/* Second grid to display the calculated data */}
            <Grid>
                <Grid.Col md={6} lg={4}>
                    <Paper shadow="sm" radius="lg" p="md">
                    <strong style={{fontSize:"41px"}}>{tp}</strong> <br />Total Payments made
                    </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <Paper shadow="sm" radius="lg" p="md">
                    <strong style={{fontSize:"41px"}}>{ti}</strong><br />Total Interest Earned
                    </Paper>
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <Paper shadow="sm" radius="lg" p="md">
                    <strong style={{fontSize:"41px"}}>{tm}</strong><br />Grand Total
                    </Paper>
                </Grid.Col>
            </Grid>

            <div className='mt-10 bg-gray-50 rounded-xl'>
                <div className='p-6'>
                    <Bar options={options} data={data} />
                </div>
            </div>
        </>
    )
}
