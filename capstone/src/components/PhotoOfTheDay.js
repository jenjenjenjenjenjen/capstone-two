import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PhotoOfTheDay.css'

function PhotoOfTheDay() {
    const [photoData, setPhotoData] = useState({});
    useEffect(function fetchDataWhenMounted() {
        async function fetchData() {
            let data = await axios.get(`http://localhost:5000/potd`);
            setPhotoData(data.data);
        }
        fetchData();
    }, []);
    return (
        <div className='potdContainer'>
            <h1>NASA's Astronomy Photo of the Day</h1>
            <div className='potdInfo'>
                <img src={photoData.hdurl} className='potd'></img>
            </div>
            <div className='potdInfo'>
                <h2>{photoData.title}</h2>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
        </div>
    )
}

export default PhotoOfTheDay;