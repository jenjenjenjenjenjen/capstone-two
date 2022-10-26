import '../styles/Mission.css';
import cameras from './cameras';

function Mission({ mission }) {
    return (
        <div className='missionContainer'>
            <div className='missionList'>
                <p>Sol: {mission.sol}</p>
                <p>Earth Date: {mission.earth_date}</p>
                <p>Total Photos: {mission.total_photos}</p>
                <p>
                    Cameras: 
                    <ul>
                        {mission.cameras.map((cam) => (
                            <li>{cameras[cam]}</li>
                        ))}
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Mission;