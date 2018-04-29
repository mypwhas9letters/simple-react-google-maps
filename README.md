# simple-react-google-maps

A simple Google Maps Component for react.

# This package is still in development.

## Getting Started

Install using the npm install command:
```
$ npm i --save simple-react-google-maps
```

In your React application, navigate to the component where you want Google Maps to be rendered.
```
import GoogleMaps from "simple-react-google-maps"

<GoogleMaps
  apiKey={"Your Google Api Key"}
  style={{height: "400px", width: "100%"}}
  zoom={6}
  center={{lat: 37.4224764, lng: -122.0842499}}
  marker={{lat: 37.4224764, lng: -122.0842499}} //optional
/>
```

Google Maps Api Key
Visit https://developers.google.com/maps/documentation/javascript/ to obtain an api key. 
