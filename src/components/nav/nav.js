import React from 'react';
import classes from './nav.module.css'
import {NavLink} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.Lesson}>
                <NavLink to="/Lesson" activeClassName={classes.active}> Уроки</NavLink>
            </div>
            <div className={classes.Lesson}>
                <NavLink to="/Homework" activeClassName={classes.active}>Домашнее задание</NavLink>
            </div>
            <div className={classes.Lesson}>
                <NavLink to="/course" activeClassName={classes.active}>О курсе</NavLink>
            </div>
        </nav>
    )
}
export default Nav;