import axios from 'axios';
import { useState } from 'react';
import Mission from './Mission';
import '../styles/Missions.css';

function Missions() {
    const [formData, setFormData] = useState({rover: 'perseverance'});
    const [missions, setMissions] = useState([]);
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let manifests = await axios.get(`http://localhost:5000/missions`, {
            params: {
                rover: formData.rover
            }
        })
        setMissions(manifests.data.photo_manifest.photos)
    }
    return (
        <div>
            <h1>Mission Manifests</h1>
            <h5>Please select a rover.</h5>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <select name='rover' id='rover'>
                    <option value='perseverance'>Perseverance</option>
                    <option value='opportunity'>Opportunity</option>
                    <option value='spirit'>Spirit</option>
                    <option value='curiosity'>Curiosity</option>
                </select>
                <button type='submit'>See Manifests</button>
            </form>
            <div className='missionsContainer'>
                {missions.length ? missions.map((m) => (<Mission mission={m} />)) : null}
            </div>
        </div>
    )
}

export default Missions;