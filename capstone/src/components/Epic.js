import {useState} from 'react';
import axios from 'axios';
import API_KEY from '../API_KEY';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/Epic.css';

const BASE_PHOTO_URL = 'https://api.nasa.gov/EPIC/archive/';

function Epic() {
    let [formData, setFormData] = useState();
    let [photos, setPhotos] = useState([]);
    let [photoNum, setPhotoNum] = useState(0);
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let photos = await axios.get(`http://localhost:5000/epic/${formData.type}`, {
            params: {
                date: formData.date
            }
        })
        setPhotos(photos.data);
    }
    const nextPhoto = (evt) => {
        evt.preventDefault();
        console.log(photoNum)
        setPhotoNum(photoNum + 1);
    }
    const prevPhoto = () => {
        setPhotoNum(photoNum - 1);
    }
    return (
        <div>
            <h1>Explore images from NASA's Earth Polychromatic Imaging Camera</h1>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <input type='radio' id='natural' name='type' value='natural'></input>
                <label htmlFor='natural'> Natural</label><br></br>
                <input type='radio' id='enhanced' name='type' value='enhanced'></input>
                <label htmlFor='enhanced'> Enhanced</label><br></br>
                <label htmlFor="date">Please select a date: </label>
                <br></br>
                <input type='date' name='date' id='date'></input>
                <br></br>
                <button type='submit' id='epicBtn'>Get Photos</button>
            </form>
            <div>
                {!photos.length ? null : <div className='earthContainter'>
                    <div className='earthInfoContainer'>
                    <div className='earthPhotoContainer'>
                        <img className='earthPhoto' src={BASE_PHOTO_URL + formData.type + '/' + formData.date.split('-')[0] + '/' + formData.date.split('-')[1] + '/' + formData.date.split('-')[2] + '/png/' + photos[photoNum].image + '.png?api_key=' + API_KEY}></img>
                    </div>
                    <div className='photoInfoContainer'>
                        <p>Geographical coordinates the satellite is looking at: 
                            <p>Latitude: {photos[photoNum].coords.centroid_coordinates.lat}</p>
                            <p>Longitude: {photos[photoNum].coords.centroid_coordinates.lon}</p>
                        </p>
                        <p>Position of the satellite in space: 
                            <p>X: {photos[photoNum].coords.dscovr_j2000_position.x}</p>
                            <p>Y: {photos[photoNum].coords.dscovr_j2000_position.y}</p>
                            <p>Z: {photos[photoNum].coords.dscovr_j2000_position.z}</p>
                        </p>
                        <p>Position of the moon in space: 
                            <p>X: {photos[photoNum].coords.lunar_j2000_position.x}</p>
                            <p>Y: {photos[photoNum].coords.lunar_j2000_position.y}</p>
                            <p>Z: {photos[photoNum].coords.lunar_j2000_position.z}</p>
                        </p>
                        <p>Position of the sun in space: 
                            <p>X: {photos[photoNum].coords.sun_j2000_position.x}</p>
                            <p>Y: {photos[photoNum].coords.sun_j2000_position.y}</p>
                            <p>Z: {photos[photoNum].coords.sun_j2000_position.z}</p>
                        </p>
                    </div>
                    </div>
                    <div className='buttonsContainer'>
                        {photoNum === 0 ? null : <button onClick={prevPhoto} className='nextBtn'><FontAwesomeIcon icon={faArrowLeft} /></button>}
                        {photoNum === photos.length - 1 ? null : <button onClick={nextPhoto} className='nextBtn'><FontAwesomeIcon icon={faArrowRight} /></button>}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Epic;