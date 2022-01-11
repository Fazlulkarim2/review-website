import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Services from '../Services/Services';

const Service = (props) => {
    const {picture,name,price,email} = props.courseName;
    return (
        
             <Col>
      <Card className='ms-5 me-5 border border-warning bg-success '>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-2 text-light">{name}</Card.Title>
          <Card.Text className='fs-5 text-white'>
            <p>Price:{price}</p>
            <br></br>
            <p>Email:{email}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
           
            
        
    );
};

export default Service;