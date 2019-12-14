import React from 'react';
import classes from './lesson.module.css';
import {NavLink} from "react-router-dom";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/lesson-reducer";


const NewLessonItem = (props) => {
    let path = 'Lesson/8/' + props.id;
    return <div className={classes.content}>
        <NavLink to={path}>8 Класс {props.Tema}</NavLink>
    </div>
}
const Lesson8 = (props) => {
    let newPostElement = React.createRef();
    let AddPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text) ;
        props.dispatch(action);
    }
    let LessonItems = props.state.NLL8.map(h => <NewLessonItem Tema={h.Tema} id={h.id}/>)
    return (
        <div>
            <div className={classes.content}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.state.newPostText}/>
            </div>
            < div className={classes.content}>
                < button onClick={AddPost}>Опубликовать Тему</button>
            </div>

            <div className={classes.content}>
                <h1>
                    {LessonItems}
                </h1>
            </div>
        </div>
    )
}

export default Lesson8;