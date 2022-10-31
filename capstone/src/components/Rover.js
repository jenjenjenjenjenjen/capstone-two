import axios from 'axios';
import {useEffect, useState} from 'react';
import Photo from './Photo';
import PhotoForm from './PhotoForm';
import '../styles/Rover.css';
import Description from './Description';

function Rover({ name }) {
    const [roverData, setRoverData] = useState([]);
    const [photos, setPhotos] = useState(null);
    
    const getLatestPhotos = async (evt) => {
        evt.preventDefault();
        let photos = await axios.get(`http://localhost:5000/${name}/latest_photos`);
        setPhotos(photos.data);
    }
    useEffect(function fetchDataWhenMounted() {
        async function fetchData() {
            let data = await axios.get(`http://localhost:5000/${name}`);
            setRoverData(data.data[0]);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>{roverData.name} Rover</h1>
            <div className='roverContainer'>
            <div className='formContainer'>
                <PhotoForm setPhotos={setPhotos} roverData={roverData}/>
                <button onClick={getLatestPhotos} className='photoFormButton'>See Latest Photos</button>
            </div>
            <div className='roverInfoContainer'>
                <ul className='roverInfoList'>
                    <li>Launch date: {roverData.launch_date}</li>
                    <li>Landing date: {roverData.landing_date}</li>
                    <li>Status: {roverData.status}</li>
                    <li>Max Sol: {roverData.max_sol}</li>
                    <li>Max date: {roverData.max_date}</li>
                    <li>Total photos: {roverData.total_photos}</li>
                </ul>
            </div>
            <div className='roverDescriptionContainer'>
                <Description name={name}/>
            </div>
            </div>
            <div className='photosContainer'>
                {photos ? photos.map((p) => (
                    <Photo photo={p} />
                )) : null}
            </div>
        </div>
    )
}

export default Rover;