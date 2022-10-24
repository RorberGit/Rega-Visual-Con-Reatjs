import { Component } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const url = "http://localhost:8000/sistema-reg/byunit/45";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data1 = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

export class Rega extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      rega: [],
    };

  }
  
  poblarData = () => {
    axios.get(url).then((response) => {
      console.log(response.data);
      // handle success
      this.setState({ 
        rega: response.data 
      });
      
      console.log(this.state.rega);
    });
  };

  componentDidMount() {
    //this.poblarData();
    fetch(url)
    .then((res)=> res.json())    
    .then((st)=>this.setState({rega: st}))

    console.log(this.state.rega)
  }

  render() {
    return (
      <div>
        Rega
        <div>
          <DataTable columns={columns} data={data1} />
        </div>
      </div>
    );
  }
}

export default Rega;
