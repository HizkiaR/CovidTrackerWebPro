import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

const Global = () => {
  const [global, setGlobal] = useState({
    positif: NaN,
    meninggal: NaN,
    sembuh: NaN,
  });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setGlobal({
          positif: res.data.confirmed.value,
          meninggal: res.data.deaths.value,
          sembuh: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3 className="text-center">GLOBAL</h3>
      <div className="row justify-content-center"> 
      <Card>
        <Card.Header as="h5">Confirmed</Card.Header>
        <Card.Body>
            <Card.Title>{global.positif}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Death</Card.Header>
        <Card.Body>
          <Card.Title>{global.meninggal}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Recovered</Card.Header>
        <Card.Body>
          <Card.Title>{global.sembuh}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Global;
