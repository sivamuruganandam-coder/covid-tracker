import React, { useState } from 'react'
import { Form, Input } from 'reactstrap';
import CardAPI from '../../api/CardAPI';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function CountryPicker({ countrys }) {
    const [country, setCountry] = useState("");
    const countries = countrys;

    const updateSearch = (e) => {
        setCountry(e.target.value);

    }

    return (
        <div >
            <Form className="mr-auto ml-auto" style={{ marginTop: "10%", width: "80%" }}>
                <Input type="select" onChange={updateSearch}>
                    <option value={""}> Global</option>
                    {countries.map((country, i) => (<option key={i} value={country}>{country}</option>))}
                </Input>
            </Form>
            <CardAPI name={country} />
        </div>
    )
}

export default CountryPicker
