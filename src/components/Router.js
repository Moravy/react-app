import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Mains from './main';
import Project from  './project';
import Resume from './resume';
import Contact from './contact';


const Main = () => (
    <Switch>
        <Route exact path ='/'  component = {Mains}/>
        <Route path ='/project' component = {Project}/>
        <Route path ='/resume'  component = {Resume}/>
        <Route path ='/contact' component = {Contact}/>
    </Switch>
)

export default Main;