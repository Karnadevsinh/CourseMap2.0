import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Course from './components/courses/Course';
import SelectedCourse from './components/selectedCourse/SelectedCourse';
import LoginTerminal from './components/login/LoginTerminal';
import Transition from './components/selectedCourse/Transition';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInTerminal from './components/login/SignInTerminal';
import Membership from './components/selectedCourse/Membership';
import PaymentForm from './components/selectedCourse/PaymentForm';
import UdacitySelected from './components/selectedCourse/UdacitySelected';
import Transition2 from './components/selectedCourse/Transition2';


function App() {
  return (
    <div className="App">
      {/* <SelectedCourse /> */}
      {/* <Home /> */}
      {/* <Course /> */}
      {/* <LoginTerminal /> */}
      {/* <Transition /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/courseDetail' element={<SelectedCourse />} />
          <Route path='/transition' element={<Transition />} />
          <Route path='/signUp' element={<LoginTerminal />} />
          <Route path='/login' element={<SignInTerminal />} />
          <Route path='/membership' element={<PaymentForm />} />
          <Route path='/udacitySelected' element={<UdacitySelected />} />
          <Route path='/transition2' element={<Transition2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
