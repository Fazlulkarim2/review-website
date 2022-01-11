import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {
    const [courseNames,setcourseName] = useState([]);
    useEffect(()=>{

      fetch('./service.json')
      .then(res=>res.json())
      .then(data=>setcourseName(data))
    
    },[]);

    return(
        <div>
     <Row  xs={1} md={2} className="g-4">
{
        courseNames.map(courseName=><Service
            key = {courseName.id}
            courseName={courseName}></Service>)
    } 
</Row>    
        </div>
    );
};

export default Services;