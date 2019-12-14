import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./../HW.module.css"
import {addHWActionCreator, updateNewHWAction} from "../../../redux/HW-reducer";


const NewLessonItem = (props) => {
    let path = '/Homework/7/' + props.id;
    return <div>
        <NavLink to={path}>7 Класс {props.Tema}</NavLink>
    </div>
}
const HW7 = (props) => {
    let newHWElement = React.createRef();
    let AddPost = () => {
        props.dispatch(addHWActionCreator());
    }
    let onPostChange = () => {
        let text = newHWElement.current.value;
        let action = updateNewHWAction(text);
        props.dispatch(action);
    }
    let LessonItems = props.state.HPL7.map(h => <NewLessonItem Tema={h.Tema} id={h.id}/>)
    return (
        <div className={classes.content}>
            <div>
                <textarea onChange={onPostChange} ref={newHWElement} value={props.state.newPostHWText}/>
            </div>
            < div>
                < button onClick={AddPost}>Опубликовать Тему</button>
            </div>

            <div>
                <h1>
                    {LessonItems}
                </h1>
            </div>
        </div>
    )
}

export default HW7;