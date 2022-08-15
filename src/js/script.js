import * as customFunctions from './modules/functions.js'

customFunctions.handlePopupMenu()
customFunctions.handleModalWindows()
customFunctions.openModalTabs()

// vendors

// charts

import Chart from 'chart.js'
import * as Funnel from 'chartjs-plugin-funnel'

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

const chartFunnelCtx = document.getElementById('chart-funnel').getContext('2d')

const chartFunnel = new Chart(chartFunnelCtx, {
    type: 'funnel',
    data: {
        datasets: [
            {
                data: [1, 2, 1, 0, 1, 1, 1],
                backgroundColor: [
                    '#00BCD4',
                    '#3A9EFF',
                    '#673AB7',
                    '#FFB300',
                    '#00BCD4',
                    '#FFB300',
                    '#FF3031',
                ],
                hoverBackgroundColor: ['#fff'],
            },
        ],
        labels: [
            'Новый лид',
            'Взяли в работу',
            'Квалифицирован',
            'Бриф отправлен',
            'Бриф согласован',
            'Договор/счет выставлен',
            'Предоплата получена',
        ],
    },
    options: {
        sort: 'desc',
        gap: 2,
        legend: {
            position: 'right',
        },
    },
})

// calendar

import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

let btnTab = document.querySelectorAll('.btn--tab, .modal-calendar-open-btn')

const prevArrowIcon = `<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70908 0.460557C8.0996 0.851081 8.0996 1.48425 7.70908 1.87477L3.58285 6.001H12.8353C13.3876 6.001 13.8353 6.44871 13.8353 7.001C13.8353 7.55328 13.3876 8.001 12.8353 8.001H3.58285L7.70908 12.1272C8.0996 12.5177 8.0996 13.1509 7.70908 13.5414C7.31856 13.932 6.68539 13.932 6.29487 13.5414L0.461533 7.7081C0.0710091 7.31758 0.0710091 6.68441 0.461533 6.29389L6.29487 0.460557C6.68539 0.0700325 7.31856 0.0700325 7.70908 0.460557Z" fill="#516173"/>
</svg>`

const nextArrowIcon = `<svg width="14" height="14" viewBox="0 0 14 14"  xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29687 0.460557C6.68739 0.0700325 7.32055 0.0700325 7.71108 0.460557L13.5444 6.29389C13.9349 6.68441 13.9349 7.31758 13.5444 7.7081L7.71108 13.5414C7.32055 13.932 6.68739 13.932 6.29687 13.5414C5.90634 13.1509 5.90634 12.5177 6.29687 12.1272L10.4231 8.001H1.17064C0.618354 8.001 0.170639 7.55328 0.170639 7.001C0.170639 6.44871 0.618354 6.001 1.17064 6.001H10.4231L6.29687 1.87477C5.90634 1.48425 5.90634 0.851081 6.29687 0.460557Z" fill="#516173"/>
</svg>
`

btnTab.forEach((btn) => {
    btn.addEventListener('click', () => {
        const calendarTerm = flatpickr('#calendar-term-input', {
            mode: 'single',
            showMonths: 2,
            locale: Russian,
            defaultDate: 'today',
            inline: true,
            static: true,
            prevArrow: prevArrowIcon,
            nextArrow: nextArrowIcon,
        })
        const calendarRange = flatpickr('#calendar-range-input', {
            mode: 'range',
            showMonths: 2,
            locale: Russian,
            defaultDate: 'today',
            inline: true,
            static: true,
            prevArrow: prevArrowIcon,
            nextArrow: nextArrowIcon,
        })
    })
})
