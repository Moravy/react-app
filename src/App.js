import React, { Component } from 'react';
import './App.css';
import './icon.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Router'
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
  <div>
    <Layout fixedHeader style={{color:'white'}}>
        <Header className="navBar" title="Moravy Oum" waterfall >
            <Navigation className="navSize">
                <Link to="/"><h6>Home </h6></Link>
                <Link to="/project"><h6>Project </h6></Link>
                <Link to="/resume"><h6>Resume </h6></Link>
                <Link to="/contact"><h6>Contact </h6></Link>
            </Navigation>
        </Header>
        <Drawer className="botBar" title="Moravy Oum">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume </Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div>

          </div>
          <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
