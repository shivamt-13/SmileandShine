import './App.css';
import Header from '../src/components/header/Navbar'
import Footer from '../src/components/footer/Footer'
import LandingPage from './components/Landingpage';
import Vision from './components/Vision';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <>
      <Header/>
      {/* <LandingPage/> */}
      <Aboutus/>
      {/* <Vision/> */}
      <Footer/>
    </>
  );
}

export default App;
