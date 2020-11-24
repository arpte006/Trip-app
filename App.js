
 // import the react-router-dom components
import { BrowserRouter as Router,Route } from "react-router-dom";
import {Home , TripPackages, ContactUs, Login, Register } from "./pages"
import { Switch, Link } from 'react-router-dom'; 
import React, { Component } from 'react';






const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/1' component={TripPackages}/>
      <Route exact path='/2' component={ContactUs} />
      <Route exact path='/3' component={Login} />
      <Route exact path='/4' component={Register} />
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />

  </div>
)

class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link 
                    className="nav-link" 
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
              {this.props.text}</Link>
        </li>
      );
  }
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/1", text: "TripPackages", isActive: false},
        {path: "/2", text: "ContactUs", isActive: false},
        {path: "/3", text: "Login", isActive: false},
        {path: "/4", text: "Register", isActive: false},
      ]
    }
  }

  
  handleClick(i) {
    const links = this.state.links.slice(); 
    for (const j in links) {
      links[j].isActive = i === j ;
    }
    this.setState({links: links});
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
            {this.state.links.map((link, i) => 
              <NavLink 
                path={link.path} 
                text={link.text} 
                isActive={link.isActive}
                key={link.path} 
                onClick={() => this.handleClick(i)}
              /> 
              )}
          </ul>
        </nav>
      </div>
    );
  }
}



export default App;