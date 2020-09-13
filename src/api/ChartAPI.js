import React, { useEffect, useState } from 'react';
import Charts from '../components/chart/Charts';

function ChartAPI({ countryName }) {

    let names = countryName;
    let url = (names) ? (`https://covid19.mathdro.id/api/countries/${names}`) : ('https://covid19.mathdro.id/api/daily');

    var [dailyData, setDailyData] = useState([]);
    var [confirmed, setConfirmed] = useState({});
    var [recovered, setRecovered] = useState({});
    var [death, setDeath] = useState({});

    useEffect(() => {
        fetchChart();
    }, [names]);

    const fetchChart = async () => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        if (!names) {
            setDailyData(data);
        } else {
            setConfirmed(data.confirmed);
            setRecovered(data.recovered);
            setDeath(data.deaths);
        }

    }

    if (!names) {
        confirmed = dailyData.map(value => (
            value.totalConfirmed
        ))
        death = dailyData.map(value => (
            value.deaths.total
        ))
        var date = dailyData.map(value => (
            value.reportDate
        ))
    }


    return (
        <div className="ChartAPI">
            <Charts key={date} confirmed={confirmed} death={death} date={date} recovered={recovered} country={names} />
        </div>
    )
}

export default ChartAPI
