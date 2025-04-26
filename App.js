import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Practice from "./pages/Practice";
import Events from "./pages/Events";
import Campus from "./pages/Campus";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import CodingNinjasClone from "./CodingNinjasClone";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodingNinjasClone />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/events" element={<Events />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
