import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const AccountSection = ({ userData }) => {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('New password and confirmation do not match!');
      return;
    }
    // Simulate save with an alert
    alert('Password updated successfully!');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-600">Manage your account preferences and security</p>
      </div>
      
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Company Information</h3>
          <p className="mt-1 text-sm text-gray-500">Manage your organization details</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                  Company name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    defaultValue={userData.company}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Company website
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    defaultValue="https://www.example.com"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                  Industry
                </label>
                <div className="mt-1">
                  <select
                    id="industry"
                    name="industry"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue="Technology"
                  >
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Security</h3>
          <p className="mt-1 text-sm text-gray-500">Manage your password and authentication settings</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <form className="space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Current password
              </label>
              <div className="mt-1">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New password
              </label>
              <div className="mt-1">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Subscription</h3>
          <p className="mt-1 text-sm text-gray-500">Manage your billing and plan</p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Active Subscription</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>You are currently on the Professional plan.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Current Plan</h4>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">Professional Plan</p>
                <p className="text-sm text-gray-500">Up to 20 datasets, advanced models, team collaboration</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">$79/month</p>
                <p className="text-sm text-gray-500">Renews on May 15, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upgrade Plan
            </button>
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Billing History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;