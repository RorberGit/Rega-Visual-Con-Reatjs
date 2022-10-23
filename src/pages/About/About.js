import { Component } from "react";
import axios from "axios";

const url = "http://localhost:8000/sistema-reg/byunit/45";

export class About extends Component {
  componentDidMount() {
    axios.get(url).then((response) => {
      // handle success
      console.log(response.data);
    });    
  }
  render() {
    return(
<div>Abut</div>
    ) ;
  }
}

export default About;
