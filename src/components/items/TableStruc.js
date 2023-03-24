import React from 'react'
// import { Table } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import './TableStruc.css'


const TableStruc = () => {
const [data, setData] = useState([]);
const getData = () => {
  fetch("../data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      setData(myJson);
    });
};
 useEffect(() => {
   getData();
 }, []);
  return (
    <div>
      <h1>hello</h1>
      <div className="DataTable">
        <table>
          <thead>
            <tr>
                {   
                    data.length > 0 && Object.keys(data[0]).map((item) => {
                        return <th>{item}</th>
                    }
                    )
                   
                }
              
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                  <td>{item[5]}</td>
                  <td>{item[6]}</td>
                  <td>{item[7]}</td>
                  <td>{item[8]}</td>
                  <td>{item[9]}</td>
                  <td>{item[10]}</td>
                  <td>{item[11]}</td>
                  <td>{item[12]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableStruc
