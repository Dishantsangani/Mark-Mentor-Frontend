import React, { useState } from "react";

const Exams = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can collect form data here
    toggleModal();
  };

  return (
    <>
      {/* Modal toggle button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Exam Schedule </h2>
        <button
          onClick={toggleModal}
          className="block text-white bg-[#509CDB] hover:bg-[#76a6ce] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Add Exams
        </button>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-[#3d3d3d30]">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-white">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Schedule  New Exam
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2  sm:col-span-1">
                    <label
                      htmlFor="examName"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Exam Name
                    </label>
                    <input
                      type="text"
                      id="examName"
                      name="examName"
                      placeholder="Enter exam name"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      <option value="">Select subject</option>
                      <option value="Math">Math</option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                      <option value="History">History</option>
                      <option value="Geography">Geography</option>
                      <option value="Computer">Computer</option>
                    </select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Exam Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="time"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Exam Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="standard"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Standard
                    </label>
                    <select
                      id="standard"
                      name="standard"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    >
                      <option>Select standard</option>
                      <option value="1st">1st</option>
                      <option value="2nd">2nd</option>
                      <option value="3rd">3rd</option>
                      <option value="4th">4th</option>
                      <option value="5th">5th</option>
                      <option value="6th">6th</option>
                      <option value="7th">7th</option>
                      <option value="8th">8th</option>
                    </select>
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="totalMarks"
                      className="block mb-2 text-sm font-medium text-black dark:text-black  "
                    >
                      Total Marks
                    </label>
                    <input
                      type="number"
                      id="totalMarks"
                      name="totalMarks"
                      placeholder="100"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Exam Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="3"
                      placeholder="Enter exam instructions or details here"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#509CDB] hover:bg-[#76a6ce] text-white inline-flex items-centerfocus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Schedule Exam
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Data Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700  rounded-lg">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 ">Exam Name</th>
              <th className="px-4 py-2 ">Subject</th>
              <th className="px-4 py-2 ">Date</th>
              <th className="px-4 py-2 ">Time</th>
              <th className="px-4 py-2 ">Standard</th>
              <th className="px-4 py-2 ">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  ">
              <td className="px-4 py-2 ">Unit Test 1</td>
              <td className="px-4 py-2">Math</td>
              <td className="px-4 py-2 ">2025-06-10</td>
              <td className="px-4 py-2 ">10:00 AM</td>
              <td className="px-4 py-2 ">5th</td>
              <td className="px-4 py-2 ">100</td>
            </tr>
            <tr className="bg-white ">
              <td className="px-4 py-2 ">Unit Test 1</td>
              <td className="px-4 py-2 ">English</td>
              <td className="px-4 py-2 ">2025-06-11</td>
              <td className="px-4 py-2 ">11:00 AM</td>
              <td className="px-4 py-2 ">5th</td>
              <td className="px-4 py-2 ">100</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Exams;
