import axios from 'axios';
import { useState } from 'react';
import Event from './Event';

function Eonet () {
    let [formData, setFormData] = useState();
    let [results, setResults] = useState([]);
    let [resultNum, setResultNum] = useState(0);
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await axios.get(`http://localhost:5000/eonet/events`, {
            params: {
                days: formData.days
            }
        })
        setResults(res.data.events);
    }
    return (
        <div>
            <h1>Search Natural Events</h1>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor='days'>Enter a number of days to see results for that many days previous to today.</label>
                <input id='days' name='days' type='number'></input>
                <button type='submit'>Search</button>
            </form>
            <div>
            {results.map((e) => (
                <Event e={e} />
            ))}
            </div>
        </div>
    )
}

export default Eonet;