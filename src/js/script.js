import * as customFunctions from './modules/functions.js'

// vendors

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from 'chart.js'

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
)
// chart js Tasks
const chartTasksCtx = document.getElementById('chart-tasks').getContext('2d')

chartTasksCtx.canvas.width = 300
chartTasksCtx.canvas.height = 300
const chartTasks = new Chart(chartTasksCtx, {
    type: 'doughnut',
    data: {
        labels: ['Ангелина Сейт', 'Александра', 'Владимир', 'Тимур', 'Денис'],
        datasets: [
            {
                label: '# of Votes',
                data: [20, 55, 5, 10, 10],
                backgroundColor: [
                    '#673AB7',
                    '#3A9EFF',
                    '#00BCD4',
                    '#FFB300',
                    '#10AB4F',
                ],
                borderColor: '#fff',
                borderWidth: 1,
            },
        ],
    },

    options: {
        // responsive: true,
        // maintainAspectRatio: false,
        elements: {
            arc: {
                hoverOffset: 5,
            },
        },

        plugins: {
            legend: {
                display: false,
            },
        },
    },
    plugins: [
        {
            beforeInit: function (chart, args, options) {
                if (chart.canvas.id === 'chart-tasks') {
                    const ul = document.createElement('ul')
                    chart.data.labels.forEach((label, i) => {
                        ul.innerHTML += `
                            <li class="chart-tasks-legend__list">
                                <span style="background-color: ${chart.data.datasets[0].backgroundColor[i]}"></span>
                                ${label} (${chart.data.datasets[0].data[i]}%)
                            </li>
                    `
                    })

                    return document
                        .getElementById('chart-tasks-legend')
                        .appendChild(ul)
                }

                return
            },
        },
    ],
})
