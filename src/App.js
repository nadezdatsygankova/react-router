import NavBar from "./components/NavBar";
//this for v6 version
/*import { BrowserRouter, Routes, Route } from 'react-router-dom';*/

//vor v5 version
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from './components/Card';


function App() {
  return (
    /*
    for v6 version
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/card/:user' element={<Card />} />
        </Routes>
      </div>

    </BrowserRouter>*/

    //for v5 version
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:user' component={Card} />
        </Switch>


      </div>
    </BrowserRouter>

  );
}

export default App;
