# Weather App

[Weather App Link](https://weather-app-boban.vercel.app/)

## Functional implementations:

1. Main page contains a view with a date for today for current location - it's allways available

2. On the main page there is a weather forecast for the next 5 days
			
3. Weather have an icon or an image that changes based on weather
 							
4. Conversion between Fahrenheit and Celisius can be toggled by pressing on corresponding icon - top right corner of the Topbar
			
5. By clicking on any of the weather information you can navigate to separate page for daily view of the selected date for selected location
 							
6. On the details page following information are included:						 
- Hourly weather
- Sunrise and sunset timing
- If the time is after sundown icon changes to moonrise and other moon information 
- Icons for weather
- Wind speed: In kph changes to mph on click / In mph changes to kph on click		
- Pressure 
- Humidity 
- UV index 
- Feels like (warmer weather - red up icon & colder weather - blue down icon next to degrees)
- Rain chance
 							
7. If there are any alerts they are be displayed below daily weather information
 							
8. On the top left side of the main page there is a plus button that will allow user to add more cities
   a. On click user will go to the separate page that only has search and save button					
    - User use api to make a call and whitch returns response of option cities from the drop down menu
    - Once city is selected, add button is enabled 
   b. If user has added more pages, on the main page it is possible to navigate through those added cities with arrows
   c. Cities are stored in local storage

9. On the top right side of the main page there is an option to remove all added cities except the one that displays based on the location		
   a. Confirmation modal pops out before deleting
   b. There is always one page which is current location			

10. every loading displays a spinner


## Non functional implementations:

 1. App is created via create-react-app					
 2. App use js (jsx)				
 3. App is responsive, no hardcoding of the element sizes
 4. For the weather data 3rd party api <https://www.weatherapi.com/docs/> was used
 5. App use react context
 6. App use react-router v6 							
 7. App use Tailwind UI package with dayjs and React responsive carousel						
 8. App use React icons packages
 9. Values that are displayed are rounded					
10. For API calls Axios was used

----------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
