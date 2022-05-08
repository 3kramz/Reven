
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/Pages/AddItem/AddItem';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Login/Signup';
import ManageItems from './Components/Pages/ManageItems/ManageItems';
import MyItems from './Components/Pages/MyItems/MyItems';
import Navbar from './Components/Shared/Navbar/Navbar';
import RequireAuth from './Components/Shared/RequireAuth';
import InventoryDetails from "./Components/Pages/InventoryDetails/InventoryDetails"
import { ToastContainer } from 'react-toastify';
import Blogs from './Components/Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App ">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory/:id" element={<RequireAuth>< InventoryDetails></InventoryDetails></RequireAuth>} />
        <Route path="/manage-items" element={<RequireAuth><ManageItems /></RequireAuth>} />
        <Route path="/add-item" element={<RequireAuth><AddItem /> </RequireAuth>} />
        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
