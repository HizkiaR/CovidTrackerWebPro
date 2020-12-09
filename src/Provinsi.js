import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Provinsi = () => {
  const [provinsi, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">PROVINSI</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {provinsi.map((items) => {
            return (
              <tr>
                <td>{items.provinsi}</td>
                <td>{items.kasusPosi}</td>
                <td>{items.kasusSemb}</td>
                <td>{items.kasusMeni}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Provinsi;
