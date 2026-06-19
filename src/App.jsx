import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventDetails from "./Component/EventDetails";
import EventsPage from "./Pages/EventsPage";
import CategoriesPage from "./Pages/CategoriesPage";
import Contactuspage from "./Pages/Contactuspage";
import SearchLocalStorage from "./Component/SearchLocalStorage";
import BookingPage from "./Pages/BookingPage";
import AllEvents from "./Component/AllEvents";
import AddEvent from "./Component/AddEvent";
import LoginPage from "./Auth/LoginPage";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Pages/Dashboard";
import UserPage from "./Pages/UserPage";
import SettingsPage from "./Pages/SettingPage";
import ProtectedRoute from "./Auth/ProtectedRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contactus" element={<Contactuspage />} />
          <Route path="/search" element={<SearchLocalStorage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/Setting" element={<SettingsPage />} />

          <Route path="/AllEvents" element={<AllEvents />} />
          <Route path="/AddEvent" element={<AddEvent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
