import DataTable from "react-data-table-component";
import { Component } from "react";
import axios from "axios";

const url = "http://localhost:8000/sistema-reg/byunit/45";

const columns = [
  {
    name: "Codigo",
    selector: (row) => row.Co_reg,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.Co_nombre,
    sortable: true,
  },
  {
    name: "Deniminacion",
    selector: (row) => row.denomindoc,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

export class Rega extends Component {
  state = {
    respuesta: [],
  };

  poblar = () => {
    axios.get(url).then((response) => {
      // handle success
      //console.log(response.data);
      this.setState({ respuesta: response.data });
      console.log(response.data );
    });

    /*
    fetch(url)
      .then((res) => res.json())
      .then((st) => {
        this.setState({ respuesta: st });
      });
      */
   
  };

  componentDidMount() {
    this.poblar();
  }

  render() {
    return (
      <div>
        Rega
        <div>
          <DataTable columns={columns} data={this.state.respuesta} />
        </div>
      </div>
    );
  }
}

export default Rega;
