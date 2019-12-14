import React from 'react';
import classes from './course.module.css';

const Course = (props) =>{
    return (
        <div className={classes.Text}>
            <img src='https://st2.depositphotos.com/1177973/6087/i/950/depositphotos_60871835-stock-photo-test-tube-and-flasks-with.jpg'/>
            <h1>
                Данный курс был написан на - REACT
            </h1>
        </div>

    )
}
export default Course;