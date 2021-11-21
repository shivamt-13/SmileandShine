import './App.css';
import Header from '../src/components/header/Navbar'
import Footer from '../src/components/footer/Footer'
import LandingPage from './components/Landingpage';
import Vision from './components/Vision';

function App() {
  return (
    <>
      <Header/>
      {/* <LandingPage/> */}
      <Vision/>
      <Footer/>
    </>
  );
}

export default App;
