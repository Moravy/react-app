import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import mainlogo from './cssasset/mainlogo.png';
import AWS from './cssasset/aws.png';


class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="background" style={{height: '100%', margin:'auto'}}>
            <div className="split Left">
                <div className="border1">
                    <img className='App-logo' src={mainlogo} alt= "M/o" ></img>>
                    <a href='/'><h1>Moravy Oum</h1></a>
                </div>   
            </div>
            <div className="split Rightp">
                <div className='borderp'>
                    <h1>My Project</h1>
                    <div className='grid'>
                        <Grid className="demo-grid-1">
                            <Cell className='cell' col={4}>
                                <img src={mainlogo} alt="React-web" class="image"/>
                                <div class="overlay">
                                    <div class="text" href='/'>
                                    <h6>My personal website</h6>
                                    <p>My main personal website. Using React, HTML, CSS, JS</p>
                                    </div>
                                </div>
                            </Cell>
                            <Cell className='cell' col={4}>
                            <a href='https://github.com/Moravy/Information-technology-capstone'>
                            <img src={AWS} alt="AWS" class="image"/>
                                <div class="overlay">
                                    <div class="text">
                                    <h6>OpenStreetMap</h6>
                                    <p>OpenstreetMap was made for Capstone project. Using AWS, Bashscript and YAML</p>
                                    </div>
                                </div>
                                </a>
                            </Cell>
                            <Cell className='cell' col={4}>
                            <a href='https://github.com/Moravy/Moravy.github.io'></a>
                            <img src={AWS} alt="personal-website" class="image"/>
                                <div class="overlay">
                                    <div class="text">
                                    <h6>My personal website</h6>
                                    <p>My personal website. Using HTML, CSS, JS</p>
                                    </div>
                                </div></Cell>
                            <Cell className='cell' col={4}>
                            <div class="overlay">
                                    <div class="text">
                                    <h6>Coming soon</h6>
                                    <p></p>
                                    </div>
                            </div>
                            </Cell>
                            <Cell className='cell' col={4}>
                            <div class="overlay">
                                    <div class="text">
                                    <h6>Coming soon</h6>
                                    <p></p>
                                    </div>
                            </div></Cell>
                            <Cell className='cell' col={4}>
                            <div class="overlay">
                                    <div class="text">
                                    <h6>Coming soon</h6>
                                    <p></p>
                                    </div>
                            </div></Cell>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
 
export default Project;