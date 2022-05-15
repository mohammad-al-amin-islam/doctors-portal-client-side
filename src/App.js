import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ReqireAuth from './Pages/Login/ReqireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <ReqireAuth>
            <Appoinment />
          </ReqireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <ReqireAuth>
            <Dashboard />
          </ReqireAuth>
        }>
          <Route index element={<MyAppoinment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
        </Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
