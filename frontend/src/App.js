import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login.js";
import UserProfile from "./Pages/UserProfile/UserProfile.js";
import AddService from "./Pages/AddService/AddService.js";
import Services from "./Pages/Services/Services.js";
import Order from "./Pages/Order/Order.js";
import MyOrder from "./Pages/MyOrder/MyOrder.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import UpdateService from "./Pages/UpdateService/UpdateService.js";
import PrivateRoute from "./PrivateRoute/PrivateRoute.js";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Footer from "./Components/Footer/Footer.js";
import Error404 from "./Pages/Error404/Error404.js";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: "60px",
  transition: transitions.FADE,
  type: types.SUCCESS,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-service"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-service/:id"
            element={
              <PrivateRoute>
                <UpdateService />
              </PrivateRoute>
            }
          />

          <Route
            path="/order/:id"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-order"
            element={
              <PrivateRoute>
                <MyOrder />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </AlertProvider>
  );
}
export default App;
