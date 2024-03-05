import React, { useState } from 'react';

function Visitors() {
  const [visitor, setVisitor] = useState({
    name: '',
    mobile: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVisitor({
      ...visitor,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    setVisitor({
      ...visitor,
      image: URL.createObjectURL(event.target.files[0])
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission
    console.log('Submitted:', visitor);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Visitor Information Form</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={visitor.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="mobile" className="sr-only">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                pattern="[0-9]{10}"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mobile Number"
                value={visitor.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="image" className="sr-only">Picture</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div>
            {visitor.image && <img src={visitor.image} alt="Visitor" className="mt-4 mx-auto" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: solid/lock-closed */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4 8a6 6 0 1110.65 3.316l3.935 3.935A2 2 0 0115.95 18H4a2 2 0 01-2-2v-4a2 2 0 011-1.732l1.82-1.82A6.01 6.01 0 014 8zm7-6a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm1 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Visitors;
