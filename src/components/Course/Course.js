import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {picture,name,price,about} = props.categorie;
    console.log(props.service)
    return (
      <Col>
      <Card className='ms-5 me-5 border border-warning bg-success'>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="fs-2 text-light"><h1>{name}</h1></Card.Title>
          <Card.Text className='fs-4 text-white'>
            <p>Price:{price}</p>
            <br></br>
            <p>{about}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;
