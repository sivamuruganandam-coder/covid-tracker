import React from 'react'
import { Line, Bar } from 'react-chartjs-2'


function Charts({ confirmed, death, date, recovered, country }) {

    const line = (
        <Line
            data={{
                labels: date,
                datasets: [{
                    data: confirmed,
                    label: "Infected",
                    borderColor: "blue",
                    backgroundColor: "grey",
                    fill: true
                }, {
                    data: death,
                    label: "Death",
                    borderColor: "red",
                    backgroundColor: "tomato",
                    fill: true
                }]
            }}
        />
    )
    const bar = (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Death'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        '#eed202',
                        'green',
                        '#e51a4c'
                    ],
                    data: [confirmed.value, recovered.value, death.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current situation in ${country}.` },
            }}
        />
    )
    if (!death) {
        return 'loading..';
    }
    return (
        <div className="Charts" style={{ color: "black", textAlign: "center" }}>
            <h1>Graph</h1>
            {(country) ? bar : line}
        </div>
    )
}

export default Charts
