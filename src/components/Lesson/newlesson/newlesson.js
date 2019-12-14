import React from 'react';
import classes from './newlesson.module.css';
import {NavLink, Route} from "react-router-dom";

const NewLessonItem = (props) => {
    debugger
    let path = 'Lesson/' + props.id;
    return <div className={classes.lesson}>
        <NavLink to={path}>{props.Tema}</NavLink>
    </div>
}
const NewLesson = (props) => {
    debugger


    let LessonItems = props.state.map(h => <NewLessonItem Tema={h.Tema} id={h.id}/>)
    return <div className={classes.content}>
        {LessonItems}
    </div>
}
export default NewLesson;