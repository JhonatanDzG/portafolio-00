import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar/NavBar';

import Home from './view/home/Home';
import About from './view/about/About';
import Projects from './view/projects/Projects';
import Contact from './view/contact/Contact';

export default function App() {
  return (
    <Router>
    <div className="app">
    <NavBar/>

    <div className='app_container'>

    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route  path='/about' Component={About}/>
      <Route  path='/projects' Component={Projects}/>
      <Route  path='/contact' Component={Contact}/>
    </Routes>
    </div>
    </div>
    </Router>

  );
}


