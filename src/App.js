import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginComponent from "./components/LoginComponent";
import UsersComponent from "./components/UsersComponent";
import HomeComponent from "./components/HomeComponent";
import NavbarComponent from "./components/NavbarComponent";
import AddAccomodation from "./components/addAccomodation/AddAccomodation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="users" element={<UsersComponent />} />
            <Route path="/addAccomodation" element={<AddAccomodation />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
