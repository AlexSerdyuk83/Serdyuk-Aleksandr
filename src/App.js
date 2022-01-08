import './App.scss';
import {Routes, Route} from 'react-router';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactsPage from './Pages/ContactsPage';

function App() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>
      <div className="sidebar">
        <NavBar/>
      </div>
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
