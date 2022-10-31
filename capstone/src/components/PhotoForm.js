import axios from 'axios';
import { useState } from 'react';
import '../styles/PhotoForm.css'

function PhotoForm({ setPhotos, roverData }) {
    const [formData, setFormData] = useState({
        camera: null,
        sol: null,
        earth_date: null
    });
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let photos = await axios.get(`http://localhost:5000/${roverData.name}/photos`, {
            params: {
                camera: formData.camera,
                sol: formData.sol,
                earth_date: formData.earth_date
            }
        })
        setPhotos(photos.data)
    }
    return (
        <div className='photoFormContainer'>
            <form onChange={handleChange} onSubmit={handleSubmit} className='photoForm'>
                <label htmlFor="camera">Choose a camera: </label>
                <br></br>
                <select name="camera" id="camera" className='photoInput'>
                    <option value={null}>All Cameras</option>
                    {!roverData.cameras ? null : roverData.cameras.map((cam) => (
                        <option value={cam.name.toLowerCase()}>{cam.full_name}</option>
                    ))}
                </select>
                <br></br>
                <label htmlFor='sol'>Sol: </label>
                <br></br>
                <input type='number' name="sol" id="sol" className='photoInput'></input>
                <br></br>
                <label htmlFor='earth_date'>Earth Date: </label>
                <br></br>
                <input type='date' name="earth_date" id="earth_date" className='photoInput'></input>
                <br></br>
                <button type="submit" className='photoFormButton'>Get Photos</button>
            </form>
        </div>
    )
}

export default PhotoForm;