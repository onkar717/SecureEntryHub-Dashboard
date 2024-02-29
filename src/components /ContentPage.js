import React, { useState } from 'react';

function ContentPage() {
  // State variables to store form data
  const [personName, setPersonName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [image, setImage] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any actions here with the form data
    console.log('Form submitted:', { personName, carNumber, image, mobileNumber });
    // Reset form fields after submission
    setPersonName('');
    setCarNumber('');
    setImage('');
    setMobileNumber('');
  };

  return (
    <div className="flex-1 bg-gray-100">
      {/* Main content header */}
      <div className="bg-white p-4 shadow-md">
        <h2 className="text-lg font-semibold text-gray-800">Input Page</h2>
      </div>

      {/* Main content area */}
      <div className="p-4">
        {/* Form for input */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="personName" className="block text-sm font-medium text-gray-700">Person's Name:</label>
            <input
              type="text"
              id="personName"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="carNumber" className="block text-sm font-medium text-gray-700">Car Number:</label>
            <input
              type="text"
              id="carNumber"
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContentPage;