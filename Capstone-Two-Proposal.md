# Capstone Two Proposal

My goal is to create a web app to allow users to get a view of the location of all planets in our solar system relative to Earth and the Sun. This web app should update the location of these planets as they move, and should allow users to find more information on a planet they select.


## Tech Stack

For this project I plan on using React and Node. While I do feel that I could accomplish this project using Python/Flask, my goal is to learn and explore technologies that I haven't worked with as much.

## Front-End or Back-End?

I would like to create an evenly-focused full-stack application. While I do see the front-end UI presenting more of a challenge, I really want to refine the way that I create a back-end, and make it clean and efficient. 

## Website or Mobile App?

I plan on making this a website, as I think a browser view fits my vision the best. However, I could also see this app translating into a mobile app in the future.

## Goals & Users

My goal with this website is to help people find an awareness beyond just the planet that we live on. Our galaxy is filled with mystery and marvels, and I'd like to bring some understanding of them to anyone who might be curious. The kind of users that I envision this app to have are people who wonder and want to learn. I don't plan on making an app that can teach you everything, but I would like to to be a starting place for people who are curious.

## Data

I plan on using data from the Astronomy API (https://astronomyapi.com/). While not containing everything, this API gives me a good starting point. I plan on adding more fun facts about each planet contained in the API, as well as other educational tools.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Approach

To create this app, I plan on creating a back-end that handles making requests to the Astronomy API. Upon the page loading, requests should be made to the API in order to obtain the locations of all of the planets. From there, the front-end should be able to take that data and map it in a way that the user can see. I'd also like to create a database of fun facts about all of the planets, and when a user selects a planet, a fact is randomly selected and shown, along with other data, like the planet's position. The astronomy API does have some known issues, the one worrying me the most being that some of the data can come back "upside down" depending what hemisphere the user is in. This app should not contain any sensitive information, with the exception of a key to access the data from the API. Fully functional, this app should show users a map of all of the planet's positions around the sun. Users should be able to click on a planet to get a closer view of it, as well as extra details about its position and fun facts. Some stretch goals I have are to allow users to make a profile save planetary views from their important dates. I'd also like to allow users to adjust the configuration of the planets and have the app show the next date the planets will have that configuration.
