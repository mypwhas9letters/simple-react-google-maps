import React, { Component } from 'react';
import MyComponent from "../../lib";


class Test extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: ""
    };
  }

  onChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" onChange={this.onChange} value={this.state.email}/>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
        <MyComponent
          apiKey={""}
          style={{height: "400px", width: "100%"}}
          zoom={6}
          center={{lat: 37.4224764, lng: -122.0842499}}
          markers={{lat: 37.4224764, lng: -122.0842499}}
        />
     </div>
    )
  }
}


export default Test
