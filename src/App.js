import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/navBar/NavBar';

import Home from './view/home/Home';

export default function App() {
  return (
    <Router>
    <div className="app">
    <NavBar/>

    <div className='app_container'>

    <Routes>
      <Route exact path='/' Component={Home}/>
    </Routes>
    </div>
    </div>
    </Router>

  );
}


