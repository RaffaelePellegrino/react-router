import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
//Pagine importate
import AboutUs from '../pages/AboutUs';
import defaultLayout from '../pages/DefaultLayout';
import HomePage from '../pages/HomePage';
import MainComponent from "../pages/Posts";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route Component={defaultLayout}>
          <Route path='/' Component={HomePage}/>
          <Route path='/aboutus' Component={AboutUs}/>
          <Route path='/posts' Component={MainComponent}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
