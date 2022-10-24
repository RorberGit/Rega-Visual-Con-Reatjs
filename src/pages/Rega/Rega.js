import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

const url = "http://localhost:8000/sistema-reg/byunit/45";

const columns = [
  
  {
    name: "Codigo",
    selector: (row) => row.Co_reg,
  },
  {
    name: "Nombre",
    selector: (row) => row.Co_nombre,
  },
  {
    name: "Deniminacion",
    selector: (row) => row.denomindoc,

  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

function Rega() {
  const [respuesta, setRespuesta] = useState([]);

  function poblar() {
    fetch(url)
      .then((res) => res.json())
      .then((st) => {
        setRespuesta(st);
                
      });

      console.log(respuesta);
  };

  useEffect(() => {
    poblar();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      Rega
      <div>
        <DataTable columns={columns} data={respuesta} />
      </div>
    </div>
  );
}

export default Rega;
