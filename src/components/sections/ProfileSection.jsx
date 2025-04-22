import React, { useState } from 'react';

const ProfileSection = ({ userData }) => {
  const [formData, setFormData] = useState({
    firstName: userData.name.split(' ')[0],
    lastName: userData.name.split(' ')[1] || '',
    email: userData.email,
    jobTitle: userData.jobTitle || 'Data Analyst'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save with an alert
    alert('Profile updated successfully!');
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
          <p className="mt-1 text-sm text-gray-500">Update your personal details and preferences</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center mb-6">
            <img className="h-24 w-24 rounded-full" src={userData.avatar} alt="Profile" />
            <div className="ml-6">
              <h4 className="text-lg font-medium text-gray-900">{userData.name}</h4>
              <p className="text-gray-600">{userData.email}</p>
              <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Change Profile Picture
              </button>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Job title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-6 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Notification Preferences</h3>
          <p className="mt-1 text-sm text-gray-500">Manage how we contact you</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="email_notifications"
                  name="email_notifications"
                  type="checkbox"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="email_notifications" className="font-medium text-gray-700">Email notifications</label>
                <p className="text-gray-500">Get notified when new analyses are ready or insights are generated.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="product_updates"
                  name="product_updates"
                  type="checkbox"
                  defaultChecked
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="product_updates" className="font-medium text-gray-700">Product updates</label>
                <p className="text-gray-500">Receive updates about new features and improvements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="marketing_emails"
                  name="marketing_emails"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketing_emails" className="font-medium text-gray-700">Marketing emails</label>
                <p className="text-gray-500">Receive tips, special offers, and promotions.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;