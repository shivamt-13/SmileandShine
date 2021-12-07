import './App.css';
import Header from '../src/components/header/Navbar'
import Footer from '../src/components/footer/Footer'
import LandingPage from './components/Landingpage';
import Vision from './components/Vision';
import Aboutus from './components/Aboutus';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about-us" element={<Aboutus />}/>
        <Route path="/vision" element={<Vision />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
