import React from "react";
import logo from "../assets/Ellipse.png";
import Dashboard from "../assets/Icons/Dashboard.svg";
import Student from "../assets/Icons/Student.svg";
import Marks from "../assets/Icons/Marks.png";
import History from "../assets/Icons/History.png";
import Report from "../assets/Icons/Report.png";
import Techer from "../assets/Icons/Teacher.jpg";
import Exams from "../assets/Icons/Exam.svg";
import Billing from "../assets/Icons/Billing.svg";

import { Link } from "react-router-dom";

function Asidebar() {
  return (
    <aside className="flex flex-col h-screen w-64 lg:w-64 sm:w-20 px-4 py-6 bg-white border-r shadow-md dark:bg-[#152259] dark:border-gray-700 transition-all">
      {/* Logo */}
      <p className="flex justify-center">
        <img className="w-25 h-20 rounded-lg" src={logo} alt="Logo" />
      </p>

      {/* Navigation Links */}
      <div className="flex flex-col flex-1 mt-6">
        <nav className="space-y-2">
          {/* Home */}
          <Link
            to={"/"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Dashboard} alt="Dashboard" className="w-5 h-5" />
            <span className="text-base font-medium block">Dashboard</span>
          </Link>

          {/* Student */}
          <Link
            to={"/student"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Student} alt="Marks" className="w-5 h-5" />
            <span className="text-base font-medium block">Student</span>
          </Link>

          {/* Marks */}
          <Link
            to={"/marks"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Marks} alt="Marks" className="w-5 h-5 rounded-2xl" />
            <span className="text-base font-medium block">Marks</span>
          </Link>

          {/* Report */}
          <Link
            to={"/report"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Report} alt="Report" className="w-6 h-6" />
            <span className="text-base font-medium block">Report </span>
          </Link>

          {/* Exams */}
          <Link
            to={"/exams"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Exams} alt="Report" className="w-6 h-6" />
            <span className="text-base font-medium block">Exams </span>
          </Link>

          {/* Techer */}
          <Link
            to={"/teacher"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Techer} alt="Pricing" className="w-5 h-5" />
            <span className="text-base font-medium block">Teacher</span>
          </Link>

          {/* Billing */}
          <Link
            to={"/billing"}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#509CDB]"
          >
            <img src={Billing} alt="History" className="w-5 h-5" />
            <span className="text-base font-medium block">Billing</span>
          </Link>
          
        </nav>
      </div>
    </aside>
  );
}

export default Asidebar;
