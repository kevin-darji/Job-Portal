import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Frontend/Home.jsx';
import Contact from './Frontend/Contact.jsx';
import AboutUs from './Frontend/AboutUs.jsx';
import Categories from './Frontend/Categories.jsx';
import Login from './Frontend/Login.jsx';
import Register from './Frontend/Register.jsx';
import GraphicDesigner from './Frontend/GraphicDesigner.jsx';
import DataEntry from './Frontend/DataEntry.jsx';
import WebDeveloper from './Frontend/WebDeveloper.jsx';
import AccountManager from './Frontend/AccountManger.jsx';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root path to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/graphicdesigner" element={<GraphicDesigner />} />
        <Route path="/dataentry" element={<DataEntry />} />
        <Route path="/webdeveloper" element={<WebDeveloper />} />
        <Route path="/accountmanager" element={<AccountManager />} />

      </Routes>
    </Router>
  );
}

export default App;
