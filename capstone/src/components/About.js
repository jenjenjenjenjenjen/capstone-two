function About () {
    return (
        <div>
            <h1>About</h1>
            <h2>What does this site do?</h2>
            <p>I built this website in order to provide people with just a snippet of the data that NASA provides for free with
                their APIs. There is countless amounts of data that is freely available to the public, but I think that it is
                silly that you must have the knowledge of developer to access it. On this site you can explore all types of data,
                from natural events that are being trackedd here on Earth, to the weather on Mars.
            </p>
            <h2>Features</h2>
            <p>
                This site includes a number of features, including: 
                <ul>
                    <li>Mars Rover Photos</li>
                    <li>Photos from the Earth Polychromatic Imaging Camera</li>
                    <li>Mars Weather</li>
                    <li>Earth Observatory Natural Event Tracker Data</li>
                    <li>Mars Mission Manifests</li>
                    <li>NASA's Astronomy Picture of the Day</li>
                </ul>
                I chose to implement these specific features because I am not a scientist. I knew that as long as I could understand
                the data I was displaying, others without a sophisticated understanding of astronomy could get something out of it.
            </p>
            <h2>APIs Used</h2>
            <p>Creating this application I used the EONET API, EPIC API, Insight API, Mars Rover Photos API, and the APOD API.
                Documentation for all of these APIs can be found at <a href="https://api.nasa.gov">api.nasa.gov</a>.
                I also created my own very simple API to operate as the back end for this application. It handles making requests
                to these various NASA APIs, so that it does not have to be done on the client-side.
            </p>
            <h2>Tech Stack</h2>
            <p>
                For the front end of this project I chose to use React with the React Router and Axios to make requests to my API.
                For the back end, I used an Express application to build my API, along with Axios to make requests to the NASA
                APIs.
            </p>
        </div>
    )
}

export default About;