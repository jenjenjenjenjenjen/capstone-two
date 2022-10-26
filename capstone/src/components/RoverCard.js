import '../styles/RoverCard.css';
import { Link } from 'react-router-dom';

function RoverCard({ name, imgUrl }) {
    let path = `/${name}`;
    return (
        <Link to={path}>
            <div className='roverCardContainer'>
                <img src={imgUrl} className='roverImage'></img>
                <h3>{name} Rover</h3>
            </div>
        </Link>
    )
}

export default RoverCard;