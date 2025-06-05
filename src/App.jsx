import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Layout from "./Page/Layout";
import Student from "./Page/Student";
import Marks from "./Page/Marks";
import Report from "./Page/Report";
import Exams from "./Page/Exams";
import Teacher from "./Page/Teacher";
import Billing from "./Page/Billing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/history" element={<History />} />
          <Route path="/report" element={<Report />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/billing" element={<Billing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
