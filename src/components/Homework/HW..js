import React from 'react';
import classes from './HW.module.css';
import {NavLink} from "react-router-dom";

const HomeWorkItem = (props) => {
    let path ="Homework/" + props.klass;

    return <div className={classes.content}>
        <NavLink to={path}><h2>{props.klass} класс</h2> </NavLink>
    </div>

}


const HomeWork = (props) =>{
    let HomeItems = props.state.HomList.map(h => <HomeWorkItem klass={h.klass} />);
    return(<div>
        {HomeItems}
    </div>
)
}
export default HomeWork;