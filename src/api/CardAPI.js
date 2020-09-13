import React, { useEffect, useState } from 'react';
import Cards from '../components/card/Cards';
import ChartAPI from '../api/ChartAPI';


function CardAPI({ name }) {
    let names = name;
    let url = (names) ? (`https://covid19.mathdro.id/api/countries/${names}`) : ('https://covid19.mathdro.id/api');

    const [confirm, setConfirm] = useState({});
    const [recover, setRecover] = useState({});
    const [death, setDeath] = useState({});
    const [lastUpdate, setLastUpdate] = useState("");

    useEffect(() => {
        fetchCard();
    }, [names]);

    const fetchCard = async () => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        setConfirm(data.confirmed);
        setRecover(data.recovered);
        setDeath(data.deaths);
        setLastUpdate(data.lastUpdate);
    }

    return (
        <div className="CardAPI">
            <div>
                <Cards confirmed={confirm.value} recovered={recover.value} death={death.value} lastUpdate={lastUpdate} />
                <ChartAPI countryName={names} />
            </div>
        </div>
    )
}

export default CardAPI