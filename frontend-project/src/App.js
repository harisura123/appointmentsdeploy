import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AllDoctors from './components/AllDoctors';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddDoctors from './components/AddDoctors';
import GetDoctorsDetails from './components/GetDoctorsDetails'
import UpdateDetails from "./components/UpdateDetails";
const App = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/alldoctors' element={<AllDoctors/>}/>
        <Route path='/adddoctors' element={<AddDoctors/>}/>
        <Route path='/GetDoctorsDetails/:id' element={<GetDoctorsDetails/>} />
        <Route path='/update/:id' element={<UpdateDetails/>}/>
      </Routes>
    </BrowserRouter>
);

export default App;
