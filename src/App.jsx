// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import Home from './pages/Home';
import Newsletters from './pages/Newsletters';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import ProfileSection from './pages/ProfileSection';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app">
        <Navbar setSearchTerm={setSearchTerm}/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/newsletter" element={<Newsletters />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route  path='/profile' element={<ProfileSection/>}/>
            <Route  path='/signin' element={<SignIn/>}/>
            <Route  path='/signup' element={<SignUp/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
