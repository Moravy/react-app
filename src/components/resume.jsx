import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import mainlogo from './cssasset/mainlogo.png';
import resume from './cssasset/MoravyOum.pdf'
class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="background" style={{height: '100%', margin:'auto'}}>
                <div className="split Left">
                    <div className="border1">
                        <img className='App-logo' src={mainlogo} alt= "M/o" ></img>
                        <a href='/'><h1>Moravy Oum</h1></a>
                    </div>   
                </div>
                <div className="split Rightr">
                    <div className='borderr'>
                        <h1>My Resume</h1>
                        <div className="resume">
                            <p><h6>Hi!</h6> My Name is Moravy Oum and I'm a student at the Massey University, 
                                currently studying Information Technology as a major and Computer Science as a minor
                                The courses that I have completed include data structure and algorithm, networks, database,
                                capstone project and Web Development, Devops.
                                <br></br>
                                <br></br>
                                You can find my resume by clicking the resume button.
                                </p>
                            <div className='button'>
                            <Button variant="outline-warning" size='lg' className='bigbutton' href={resume} style={{width:'93px',fontFamily: 'Quicksand'}}>Resume</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Resume;