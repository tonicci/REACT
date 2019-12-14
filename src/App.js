import React from 'react';
import './App.css';
import Nav from "./components/nav/nav";
import Header from "./components/Header/Header";
import Lesson from "./components/Lesson/lesson";
import {BrowserRouter, Route} from "react-router-dom";
import Course from "./components/course/course";
import HomeWork from "./components/Homework/HW.";
import Lesson8 from "./components/Lesson/lesson8";
import HW7 from "./components/Homework/HW/HW7";


const App = (props) => {
    debugger
    console.log(props.state)
    console.log(props.store.getState())
    return (
        <div className='app-lesson'>
            <Header/>
            <Nav/>
            <div className='app-lesson-content'>
                <Route exact path='/Lesson' render={() => <Lesson
                    state={props.state.NLLP.NLL}/>}/>
                <Route exact path='/Homework' render={() => <HomeWork
                    state={props.state.HPL}/>}/>
                <Route exact path='/Homework/7' render={() => <HW7
                    state={props.state.HPL}
                    dispatch={props.dispatch}
                />}/>
                <Route exact path='/Course' render={() => <Course
                state={props.state}/>}/>
                <Route exact path='/Lesson/8' render={() => <Lesson8
                    state={props.state.NLLP}
                    dispatch={props.dispatch}
                />}/>
            </div>
        </div>
    );
}
export default App;
