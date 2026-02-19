import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import EmployeeDetails from "./Pages/EmployeeDetails";
import RolesPermission from "./Pages/RolesPermission";
import TeamManagement from "./Pages/TeamManagement";
import AddLocation from "./Pages/AddLocation";
import PracticeManagement from "./Pages/PracticeManagement";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <EmployeeDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/roles"
          element={
            <PrivateRoute>
              <RolesPermission />
            </PrivateRoute>
          }
        />

        <Route
          path="/team"
          element={
            <PrivateRoute>
              <TeamManagement />
            </PrivateRoute>
          }
        />

        <Route
          path="/location"
          element={
            <PrivateRoute>
              <AddLocation />
            </PrivateRoute>
          }
        />

        <Route
          path="/practice"
          element={
            <PrivateRoute>
              <PracticeManagement />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
