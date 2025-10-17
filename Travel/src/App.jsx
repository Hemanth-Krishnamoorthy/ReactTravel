import Login from "./Pages/Loginpage/Loginpage.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import BookingPage from "./Pages/Bookingpage/Bookingpage.jsx";
function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Homepage" element={<Homepage/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/Booking" element={<BookingPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
