import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from 'react-bootstrap';

const Indonesia = () => {
  const [indonesia, setIndo] = useState({
    positif: NaN,
    meninggal: NaN,
    sembuh: NaN,
  });

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndo({
          positif: res.data.perawatan,
          meninggal: res.data.meninggal,
          sembuh: res.data.sembuh,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3 className="text-center">INDONESIA</h3>
      <div className="row justify-content-center"> 
      <Card>
        <Card.Header as="h5">Confirmed</Card.Header>
        <Card.Body>
            <Card.Title>{indonesia.positif}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Death</Card.Header>
        <Card.Body>
          <Card.Title>{indonesia.meninggal}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Recovered</Card.Header>
        <Card.Body>
          <Card.Title>{indonesia.sembuh}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Indonesia;
