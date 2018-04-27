import React, { Component } from 'react';
import loadMaps from './loadgmap'

class Gmap extends Component {
  componentDidMount(){
    loadMaps(this.props.apiKey).then(initMap())
  }
  render(){
    const initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: -25.363, lng: 131.044}
      });

    }
    return(
      <div>
        <p id="map" style={{ height: this.props.height, width: this.props.width}}></p>
      </div>
    )
  }
}

export default Gmap

// var marker = new window.google.maps.Marker({
//   position: {lat: -25.363, lng: 131.044},
//   map: map
// }
