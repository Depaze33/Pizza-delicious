import React, { useState } from "react";
import AllPizza from "../pizza-data";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";
import "../screens/HomeScreen.css"

const HomeScree = () => {
  return (
    <Container style={{ padding: "10px" }}>
      <Row>
        {AllPizza.map((pizza) => (
          <Col md={4}>
            <PizzaCard lapizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
const PizzaCard = (props) => {
  const [taille, setTaille] = useState("small");
  const [quantite, setQuantité] = useState(1);
  return (
    <Card
      style={{
        margin: "10px",
        padding: "10px",
        width: "22rem",
        height: "20rem",
      }}
    >
      <Card.Img variant="top" src={props.lapizza.image}></Card.Img>
      <Card.Body>
        <Card.Title>{props.lapizza.nom}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>
                Taille : <br />
                <select name="" id="">
                  value = {taille}
                  onChange ={(e) => setTaille(e.target.value)}
                  {props.lapizza.taille.map((taille, index) => (
                    <option key={index} value={taille}>
                      {taille}
                    </option>
                  ))}
                </select>
              </h6>
            </Col>
            <Col md={6}>
              <h6>
                Quantité <br />
                <select name="" id="">
                  value={quantite}
                  onChange ={(e) => setQuantité(e.target.value)}
                  {[...Array(10).keys()].map((value) => (
                    <option key={value} value={value + 1}>
                      {value + 1}
                    </option>
                  ))}
                </select>
              </h6>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>
          Prix : {props.lapizza.prix[0][taille]*quantite}
          </Col>
        </Row>
        <Button className="button" variant="primary" style={{}}>Add</Button>
      </Card.Body>
    </Card>
  );
};

export default HomeScree;
