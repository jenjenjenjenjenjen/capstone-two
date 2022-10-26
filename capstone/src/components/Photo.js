import '../styles/Photo.css'

function Photo({ photo }) {
    return (
        <div className='cardContainer'>
                <div className="card" id="card">
            <div className="front">
                <img src={photo.img_src} className='marsImg'></img>
            </div>
            <div className="back">
                <p><b>Date of photo:</b> {photo.earth_date}</p>
                <p><b>Camera:</b> {photo.camera.full_name}</p>
            </div>
        </div>
        </div>
    )
}

export default Photo;