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
        <div className="split Rightc">
                <div className='borderc'>
                    <h1>My Contact</h1>
                    <div class="form-group">
                    <form className='container'action="https://formspree.io/moravy22@gmail.com" method="POST">
                        <div class="form-group">
                        <input type="name" className="forms" name="name" placeholder='Your name'/>
                        </div>
                        <div class="form-group">
                        <input type="email" className="forms"name="_replyto" placeholder='Your email'/>
                        </div>
                        <div class="form-group">
                        <textarea type="message" row='10'  className="forms"name="message" placeholder='Message'/>
                        </div>
                        <div class='color'>
                        <input  type="submit" value="Send"/>
                        </div>
                    </form>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="mailto:moravy22@gmail.com"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                 </nav>
        </div>
    </div>
        );
    }
}
 
export default Contact;