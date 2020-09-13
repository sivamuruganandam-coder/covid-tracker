import React, { useEffect, useState } from 'react';
import CountryPicker from '../components/country-picker/CountryPicker';


function CountryPickerAPI() {
    const [countries, setCountries] = useState([])

    const fetchCountry = async () => {
        const response = await fetch('https://covid19.mathdro.id/api/countries/');
        const data = await response.json();
        setCountries(data.countries);
    }

    useEffect(() => {
        fetchCountry();
    }, []);

    const countryName = countries.map(item => (
        item.name
    ))

    return (
        <div className="CountryPickerAPI">
            <CountryPicker key={countryName} countrys={countryName} />
        </div>
    )
}

export default CountryPickerAPI
