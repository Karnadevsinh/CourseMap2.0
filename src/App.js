import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Course from './components/courses/Course';
import SelectedCourse from './components/selectedCourse/SelectedCourse';
import LoginTerminal from './components/login/LoginTerminal';
import Transition from './components/selectedCourse/Transition';


function App() {
  return (
    <div className="App">
      {/* <SelectedCourse /> */}
      {/* <Home /> */}
      {/* <Course /> */}
      {/* <LoginTerminal /> */}
      <Transition />
    </div>
  );
}

export default App;
