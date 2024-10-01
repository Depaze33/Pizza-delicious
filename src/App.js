import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import About from './components/About';
import { Contact } from './components/Contact';
import {TermPolicy} from './components/TermPolicy';
import { NavBar } from './components/NavBar';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar/>
      <Routes>
        <Route path='/' element ={<HomeScreen/>}></Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/term-policy' element={<TermPolicy />} /> {/* Updated the URL for consistency */}
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
