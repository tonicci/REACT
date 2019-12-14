import React from 'react';
import classes from './lesson.module.css'
import NewLesson from "./newlesson/newlesson";


const Lesson = (props) => {
    debugger
    console.log(props.state)
    console.log(props.store)
    return (
        <div>
            <div className={classes.content}>
                <img src='https://acropolis.org.ru/img/site/image/calennum7148/imgtop/chemistry-engine.jpg'/>
            </div>
            <div className={classes.content}>
                <h3>Вы можете воспользоваться ускоренным поиском темы, Введите тему</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button> Введите класс</button>
                    </div>
                </div>
            </div>
            <div>
                {<NewLesson state={props.state}/>}
            </div>
        </div>
    )
}
export default Lesson;