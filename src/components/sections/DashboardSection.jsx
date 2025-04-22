import React from 'react';
import { BarChart, PieChart, LineChart, Lightbulb, File, ArrowRight } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { chartData } from '../../mockData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const DashboardSection = ({ userFiles, setSelectedFile, setActiveSection }) => {
  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setActiveSection('analysis');
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Overview of your analytics</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                <File className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Datasets</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{userFiles.length}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Analyses Created</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Dashboards Created</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">8</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Insights Generated</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">47</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Charts */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Featured Dashboard</h3>
          <p className="mt-1 text-sm text-gray-500">
            From your Q1 Sales Analysis
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Chart 1: Sales Trend */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900">Monthly Sales Trend</h4>
                <div className="text-sm text-gray-500">Last 6 months</div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={chartData.sales} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" name="Actual" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="target" name="Target" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Product Distribution */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium text-gray-900">Product Distribution</h4>
                <div className="text-sm text-gray-500">By revenue</div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={chartData.products}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {chartData.products.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Key Insights */}
            <div className="border rounded-lg p-4 lg:col-span-3">
              <h4 className="font-medium text-gray-900 mb-4">Key Insights</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">North region consistently outperforms all other regions by 32%</p>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Tuesday shows highest conversion rate (34.2%)</p>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Products A and B account for 60% of total sales revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Files */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Files</h3>
            <p className="mt-1 text-sm text-gray-500">
              Your recently analyzed datasets
            </p>
          </div>
          <button 
            onClick={() => setActiveSection('analysis')}
            className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
          >
            View all files <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {userFiles.slice(0, 3).map((file) => (
            <li 
              key={file.id} 
              className="px-4 py-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleFileSelect(file)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0">
                  <div className="flex-shrink-0">
                    <File className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-600 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500">Last analyzed: {file.date}</p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 flex">
                  <button 
                    className="mr-2 text-sm font-medium text-blue-600 hover:text-blue-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFileSelect(file);
                    }}
                  >
                    Open
                  </button>
                  <button 
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Share
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSection;