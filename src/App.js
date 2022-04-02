import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Sidebar/>
      <MainContent/>
      <Footer/>
    </>
  );
}

export default App;
