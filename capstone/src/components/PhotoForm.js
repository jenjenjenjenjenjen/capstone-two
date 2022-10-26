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
        <form onChange={handleChange} onSubmit={handleSubmit} className='photoForm'>
                <label htmlFor="camera">Choose a camera: </label>
                <select name="camera" id="camera">
                    <option value={null}>All Cameras</option>
                    {!roverData.cameras ? null : roverData.cameras.map((cam) => (
                        <option value={cam.name.toLowerCase()}>{cam.full_name}</option>
                    ))}
                </select>
                <label htmlFor="sol">Sol: </label>
                <input type='number' name="sol" id="sol"></input>
                <label htmlFor="earth_date">Earth Date: </label>
                <input type='date' name="earth_date" id="earth_date"></input>
                <button type="submit">Get Photos</button>
            </form>
    )
}

export default PhotoForm;