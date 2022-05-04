
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
import InventoryDetails from "./Components/Pages/InventoryDetails/InventoryDetails"

function App() {
  return (
    <div className="App ">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:id" element={< InventoryDetails></InventoryDetails>} />
        <Route path="/manage-items" element={<ManageItems />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/my-items" element={<MyItems />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
