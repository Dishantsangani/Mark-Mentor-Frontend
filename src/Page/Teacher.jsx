import React, { useState } from "react";

function Teacher() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Teachers</h2>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-full md:w-auto"
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Search Teachers name..."
                required
              />
            </div>
            <button
              type="submit"
              className="ml-2 p-2.5 text-sm font-medium text-white bg-[#509CDB] hover:bg-[#76a6ce] rounded-lg focus:ring-4 focus:outline-none"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          {/* Add Teachers Button */}
          <button
            onClick={toggleModal}
            className="text-white bg-[#509CDB] hover:bg-[#76a6ce] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            type="button"
          >
            Add Teachers
          </button>
          {showModal && (
            <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-[#3d3d3d30]">
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-white">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Add Teachers
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
                          htmlFor="Teachers Name"
                          className="block mb-2 text-sm font-medium text-black dark:text-black"
                        >
                          Teachers Name
                        </label>
                        <input
                          type="text"
                          id="Teachers Name"
                          name="Teachers Name"
                          placeholder="Enter Teachers Name"
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
                          htmlFor="date"
                          className="block mb-2 text-sm font-medium text-black dark:text-black"
                        >
                          Date Of Joining
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
                        <label className="block mb-2 text-sm font-medium text-black dark:text-black">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Teachers Email Address"
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        />
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-black dark:text-black  ">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter Phone Number"
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        />
                      </div>

                      <div className="col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-black dark:text-black"
                        >
                          Describe Work Experience
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows="3"
                          placeholder="Enter Your Work Experience"
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
                      Add Techers
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Display Data */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700  rounded-lg">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 ">Name</th>
              <th className="px-4 py-2 ">Subject</th>
              <th className="px-4 py-2 ">Date of Join </th>
              <th className="px-4 py-2 ">Standard</th>
              <th className="px-4 py-2 ">Email</th>
              <th className="px-4 py-2 ">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  ">
              <td className="px-4 py-2 ">Eddy Broke</td>
              <td className="px-4 py-2">Math</td>
              <td className="px-4 py-2 ">2025-06-10</td>
              <td className="px-4 py-2 ">6th</td>
              <td className="px-4 py-2 ">eddy@gmail.com</td>
              <td className="px-4 py-2 ">9635848563</td>
            </tr>
            
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teacher;
