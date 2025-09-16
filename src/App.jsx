// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import MainLayout from "./components/MainLayout";

const App = () => (
  <Router>
    <Routes>
      {/* admin routes — keep them before the public catch-all */}
      <Route path="home/admin" element={<AdminLogin />} />
      <Route path="/admin/panel" element={<AdminPanel />} />

      {/* public site: render MainLayout for everything else so l ayout + sections stay mounted */}
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  </Router>
);

export default App;
