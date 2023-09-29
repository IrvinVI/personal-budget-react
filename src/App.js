import './App.scss';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Menu></Menu>
      <Hero></Hero>
      <div className='mainContainer'>
        <Routes>
          <Route path="/about" element = {<AboutPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
