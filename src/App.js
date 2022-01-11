import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Service from './components/Service/Service';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home/>}/> 
        <Route path ="/about" element={<About/>}/> 
        <Route path ="/services" element={<Services/>}/> 
        {/* <Route path ="/service/:serviceId" element={<Service/>}/>  */}
        <Route path ="*" element={<NotFound/>}/> 
        <Route path ="/blogs" element={<Blogs/>}/> 
        <Route path ="/" element={<Home/>}/> 
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
