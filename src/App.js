import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/frontend/Home/Home';
import Dog from './Pages/frontend/Dog/Dog';
import Child from './Pages/frontend/Child/Child';
import Type from './Pages/frontend/Type/Type';
import About from './Pages/frontend/About/About';
import Contact from './Pages/frontend/Contact/Contact';
import NotFound from './Pages/frontend/NotFound/NotFound';
import Nav from './Pages/frontend/Nav/Nav';
import Logo from './Pages/frontend/Logo/Logo';
import Footer from './Pages/frontend/Footer/Footer';
// import AddService from './Pages/Admin/AddService/AddService';
import Details from './Pages/frontend/Details/Details';
// import Home from './Pages/Home/Home';
// import Contact from './Pages/Contact/Contact';
// import Blog from './Pages/Blog/Blog';
// import Type from './Pages/Type/Type';
// import About from './Pages/About/About';
// import Dog from './Pages/Dog/Dog';
// import Child from './Pages/Child/Child';
// import NotFound from './Pages/NotFound/NotFound';
// import Footer from './Pages/Footer/Footer';
// import Logo from './Pages/Logo/Logo';

function App() {
  return (
    <div className="App">
     {/* <Nav></Nav> */}
     <BrowserRouter>
     <Logo/>
       <Nav/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/dog" element={<Dog/>}></Route>
         <Route path="/child" element={<Child/>}></Route>
         <Route path="/type" element={<Type/>}></Route>
         <Route path="/details/:_id" element={<Details/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         {/* <Route path="/addService" element={<AddService/>}></Route> */}
         <Route path="*" element={<NotFound/>}></Route>
       </Routes>
       <Footer/>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
