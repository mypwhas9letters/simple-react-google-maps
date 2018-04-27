import React, { Component } from 'react'
import $S from 'scriptjs'
import Gmap from './src/mapComponent'

class SimpleGoogleMaps extends Component {
  render(){
    return(
      <Gmap
        apiKey={""}
        height={"400px"}
        width={"100%"}
      }>
    )
  }
}

export default SimpleGoogleMaps
