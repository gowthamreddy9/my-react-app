import logo from './logo.svg';

import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import DataBinding from './component/DataBinding'
import EventBinding from './component/EventBinding'
import UserGreeting from './component/UserGreeting';
import Inline from './component/Inline';
import Stylesheet from './component/Stylesheet';
import ClassComp from './component/ClassComp';
import FunctionalComp from './component/FunctionalComp';
import RegisterForm from './component/RegisterForm'



function App() {
  return (
    <BrowserRouter>
     
{/* <DataBinding/>
<EventBinding/>
<Inline/>
<Stylesheet primary={true}/>
<UserGreeting/>
<div className="App">
        <nav className="nav navbar-dark bg-dark justify-content-between">
          <a href="/" className="navbar-brand">React Routing</a>


        </nav>
        <Nav />
        <Routes>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>

        </Routes>

      </div> */}

      {/* <ClassComp/>
      <FunctionalComp/> */}
     < RegisterForm/>

    </BrowserRouter>
    
  );
}

export default App;
