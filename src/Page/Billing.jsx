import React from "react";

function Billing() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Pay Fees</h2>
      </div>
      <div className="max-w-6xl mx-auto mt-5">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Standard */}
          <div>
            <label
              htmlFor="standard"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Standard
            </label>
            <select
              id="standard"
              name="standard"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Roll No */}
          <div>
            <label
              htmlFor="rollNo"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Roll No
            </label>
            <input
              type="number"
              id="rollNo"
              name="rollNo"
              placeholder="Enter roll no"
              required
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Payment */}
          <div>
            <label
              htmlFor="payment"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Payment
            </label>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg w-full p-2 transition duration-200"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
