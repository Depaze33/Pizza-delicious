import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import "./Contact.css";



export const Contact = () => {
    return (
        
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Col md={6}>
                        <h1>PizzaDelicious</h1>
                        <h3>Notre Adresse : </h3>
                        <p> 103 Rue des Olives Noires </p>
                        <p>75021 Paris</p>

                        <p>
                        <strong>POUR VOTRE INFORMATION!</strong> Nous offrons un service traiteur complet pour
                        tout événement, grand ou petit. Nous comprenons vos besoins et nous préparons nos plats
                        pour satisfaire les critères les plus importants, à la fois esthétiques et gustatifs.
                        </p>
                        <div className="titleTable" 

                       
                    >
                        -- Nos Coordonnées --
                    </div>
                        <Table striped bordered hover>
    
      <tbody>
        <tr>
        <td><FiPhoneCall /></td>
        <td>Telephone</td>
         <td colSpan={2}>05.23.25.23</td>
        </tr>
        <tr>
          <td><ImMobile></ImMobile></td>
          <td>Portable</td>
          <td colSpan={2}>06.25.23.56.21</td>
        </tr>
        <tr>
          <td>< AiOutlineMail></AiOutlineMail></td>
          <td >Email</td>
          <td colSpan={2}>contact@pizza-delicious.com</td>
        </tr>
      </tbody>
    </Table>
                    </Col>
                    <Col md={6}>
                    <img
                        src="/images/farmhouse.jpg" // Use the relative path to the image in the public folder
                        alt="Pizza Delicious"
                        style={{ height: "99%", width: "110%", borderRadius: "10px" }}
                        
                    /></Col>
                </Row>
            </Container>
        
    );
};
