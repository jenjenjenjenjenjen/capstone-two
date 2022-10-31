# NASA API Explorer

This project can be found as [NASA API Explorer](link.here).

## What does this site do?

I built this website in order to provide people with just a snippet of the data that NASA provides for free with
their APIs. There is countless amounts of data that is freely available to the public, but I think that it is
silly that you must have the knowledge of developer to access it. On this site you can explore all types of data, from natural events that are being trackedd here on Earth, to the weather on Mars.

## Features

I built this site with a number of features, including:

### Mars Rover Photos

This feature allows users to fill out a form for a specific Mars rover, and displays the photos taken by that rover, along with basic details, like the date the photo was taken, as well as which camera on the rover was used to take the photo.

### Photos from the Earth Polychromatic Imaging Camera

This feature allows users to see natural or enhanced photos of the Earth based on a date that they provide. They will also get information on the geographical coordinates of where the camera is pointing at the Earth, as well as where the sun, moon, and satellite that took the image are positioned in space.

### Mars Weather

This feature uses NASAs reusable Mars Weather component. It allows users to see the weather on Mars in Farenheight or Celecius, and shows a 7-day forecast for the planet.

### Earth Observatory Natural Event Tracker

This feature shows users natural events on Earth that NASA is currently tracking. Users can enter a number of days to see events tracked that many days before the current date. This will show users the name of the event, the category of event it falls under, as well as links to sources for more information about that event.

### Mars Mission Manifests

This feature allows users to select a Mars rover and see all mission manifests from that rover. A mission manifest includes the Earth Date of the mission, the Sol (Mars day) of that mission, how many photos were taken, and which cameras were used.

### NASA's Astronomy Picture of the Day

This feature shows users NASA's Astronomy Picture of the Day along with a short description provided by the API.

## Testing

Tests are located in the components file, and should be in similar order to their corresponding components. Tests were written with Jest and the React Testing Library.

To run tests, use `npm test`. This will run all tests. Specify a file name after this command to run a single file.

## User Flow

As a user enters the website, they will see a short description of the purpose of the site, and a navbar with plenty of options. If the user wanted to search Mars Rover photos, they could select the tab for Mars Rover photos, and then select which rover to view photos from. Then, the user can either fill out the form to specify which photos they'd like to see, or just select 'See Latest Photos'. Photos will then load and appear in the browser. The user can hover over each photo to see more information.

## API

This application was built using a number of APIs, documentation for all of which can be found [here](https://api.nasa.gov).
APIs I used were:
- APOD
- EONET
- EPIC
- Insight
- Mars Rover Photos

I also built a custom back-end API to handle making all of the requests to these various APIs. This API is very simple, created with Express. It only handles GET requests to fetch information from NASAs data.

## Tech Stack

For the front end of this project I chose to use React with the React Router and Axios to make requests to my API.
For the back end, I used an Express application to build my API, along with Axios to make requests to the NASA APIs.