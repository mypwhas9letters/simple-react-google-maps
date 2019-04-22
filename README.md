# simple-react-google-maps

A simple Google Maps Component for react applications.

## Getting Started

Google Maps Api Key
Visit https://developers.google.com/maps/documentation/javascript/
Create a Google Developers account and enable Google Maps Platform to obtain an api key.

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
  markers={{lat: 37.4224764, lng: -122.0842499}} //optional
/>
```

Multiple markers can also be rendered. Marker can also take in an array of geocodes.
```
markers={
  [
    {lat: 37.4224764, lng: -122.0842499},
    {lat: 37.5224764, lng: -121.0842499},
    {lat: 37.3224764, lng: -120.0842499}
  ]
}
```

## Geocodes
Google also provides a Geocoding service. By sending a request to their api, any address can be geocoded.
https://maps.googleapis.com/maps/api/geocode/json?address=${your address}&key={your api key}

For example:
To get the The Metropolitan Museum of Art's geocode, send a fetch request to
https://maps.googleapis.com/maps/api/geocode/json?address=$1000+5thAve+NewYork+10028&key={your api key}
The response will contain the coordinates for the given address.
