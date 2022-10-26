import RoverCard from "./RoverCard";

function Home() {
    return (
        <div>
            <h1>Life on Mars!</h1>
            <h2>Please select a rover to begin exploring.</h2>
            <RoverCard name='Perseverance' imgUrl='https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg' />
            <RoverCard name='Curiosity' imgUrl='https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg' />
            <RoverCard name='Opportunity' imgUrl='https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg' />
            <RoverCard name='Spirit' imgUrl='https://solarsystem.nasa.gov/system/content_pages/main_images/1068_rover2-1.jpg' />
        </div>
    )
}

export default Home;