import React, { Component } from 'react';
import mainlogo from './cssasset/mainlogo.png';


class Contact extends Component {
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
                <div className="split Right">
                    <div className='borderp'>
                        <h1>Introduction</h1>
                        <h2> Hello There!</h2>
                        
                        <h3>Im a Web Developer and Programmer </h3>
                        <nav className='logo'>
                            <ul>
                                <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                                <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;