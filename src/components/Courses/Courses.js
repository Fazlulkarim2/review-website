import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from '../Course/Course';

const Courses = () => {
    const [categories,setcategories] = useState([]);
    useEffect(()=>{

      fetch('./english.json')
      .then(res=>res.json())
      .then(data=>setcategories(data))
      console.log(categories);
    },[]);
    return (
        <div>

<Row  xs={1} md={2} className="g-4">
{
        categories.map(categorie=><Card
            key= {categorie.key}
            categorie={categorie}></Card>)
    } 
</Row>

    
        </div>
    );
};

export default Courses;