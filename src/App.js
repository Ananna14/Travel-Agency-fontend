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
import Footer from './Pages/frontend/Footer/Footer';
import Details from './Pages/frontend/Details/Details';
import AddService from './Pages/frontend/AddService/AddService';
import Pay from './Pages/Pay/Pay';
import Login from './Pages/frontend/Login/Login';
import Register from './Pages/frontend/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/Context/PrivateRoute/PrivateRoute';
import AdminDashbord from './Pages/Admin/AdminDashbord/AdminDashbord';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/frontend/Login/AdminRoute/AdminRoute';
import MyOrder from './Pages/frontend/MyOrder/MyOrder';
// import AdminDashbord from './Pages/Admin/';



function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
       <Nav/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/dog" element={<Dog/>}></Route>
         <Route path="/child" element={<Child/>}></Route>
         <Route path="/type" element={<Type/>}></Route>
         <Route path="/details/:_id" element={<PrivateRoute><Details/></PrivateRoute>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/pay" element={<PrivateRoute><Pay/></PrivateRoute>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/myOrder" element={<MyOrder/>}></Route>
                         {/* ADMIN */}
          <Route path="/admin" element={<AdminDashbord/>}></Route>
          <Route path="/admin/admin/makeAdmin" element={<MakeAdmin/>}></Route>
          <Route path="/admin/admin/addService" element={<AddService/>}></Route>
         

  {/* Admin*/}
  {/* <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
              <Route exact path="/admin" element={<AdminRoute><MakeAdmin /></AdminRoute>}>
              </Route>
              <Route path={`admin/make-admin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
              </Route>
              <Route path={`admin/make-teacher`} element={<AdminRoute><MakeTeacher /></AdminRoute>}>
              </Route>
              <Route path={`admin/add-tutor`} element={<AdminRoute><AddTutor /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor`} element={<AdminRoute><ManageTutor /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor-ads`} element={<AdminRoute><ManageTutorAds /></AdminRoute>}>
              </Route>
              <Route path={`admin/manage-tutor-books`} element={<AdminRoute><ManageTutorBooks /></AdminRoute>}>
              </Route>
            </Route> */}


         <Route path="*" element={<NotFound/>}></Route>
       </Routes>

       <Footer/>
     </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
