import React from 'react';
import Courses from '../../Courses/Courses';


const Home = () => {
    return (
        <>
        <div  className='row row-cols-sm-2  bg-secondary color-white p-4 text-white mt-5'>
            <div className='mt-5 text-start'>
                
 <p className='fs-4 fw-light'>Our language center offers group and personal lessons in English and other modern languages for all ages and levels of knowledge</p>
<h1>IMPROVE YOUR 
<span className='fw-light'> ENGLISH</span> SKILLS</h1>
      </div>
<div className=''>
<img  src= '../../../images/teacher.jpg' alt="" />
</div>
        </div>


<div class="mt-5">
<Courses></Courses>
</div>
</>
    );
};

export default Home;