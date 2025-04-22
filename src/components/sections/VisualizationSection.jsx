import React, { useState, useEffect } from 'react';
import { LineChart, BarChart2, PieChart, Download, Share2, Filter, Search } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const VisualizationSection = ({ userFiles, selectedFile, setSelectedFile, visualizations, chartData }) => {
  const [activeVisualizations, setActiveVisualizations] = useState([]);
  
  useEffect(() => {
    if (selectedFile) {
      // Find visualizations for this file
      const fileVisualizations = visualizations.filter(viz => viz.fileId === selectedFile.id);
      setActiveVisualizations(fileVisualizations);
    } else {
      setActiveVisualizations([]);
    }
  }, [selectedFile, visualizations]);
  
  const renderChartPreview = (type, height = '100%') => {
    switch(type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsLineChart data={chartData.sales} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart data={chartData.products} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsPieChart>
              <Pie
                data={chartData.regions}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.regions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      case 'funnel':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <RechartsBarChart
              data={chartData.funnel}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };
  
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Visualizations</h1>
          <p className="text-gray-600">Visual representations of your data</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <PieChart className="-ml-1 mr-2 h-5 w-5" />
          New Visualization
        </button>
      </div>
      
      {/* File selector */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-sm font-medium text-gray-900">Select a file to view visualizations</h3>
          <div className="mt-3 sm:flex sm:items-center">
            <div className="w-full">
              <select 
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
                value={selectedFile?.id || ''}
                onChange={(e) => {
                  const fileId = parseInt(e.target.value);
                  const file = userFiles.find(f => f.id === fileId);
                  setSelectedFile(file);
                }}
              >
                <option value="">Select a file...</option>
                {userFiles.map(file => (
                  <option key={file.id} value={file.id}>{file.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {selectedFile ? (
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Visualizations for {selectedFile.name}
              </h3>
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-1" />
                Export All
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeVisualizations.length > 0 ? (
                activeVisualizations.map(viz => (
                  <div key={viz.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{viz.name}</h4>
                      <div className="flex">
                        <button className="text-gray-500 hover:text-gray-700 mr-2">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="text-gray-500 hover:text-gray-700">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="h-64">
                        {renderChartPreview(viz.type)}
                      </div>
                      <div className="mt-3 text-sm text-gray-600">{viz.description}</div>
                      {viz.isRecommended && (
                        <div className="mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Recommended visualization
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <LineChart className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No visualizations found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    No visualizations have been created for this file yet.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <PieChart className="-ml-1 mr-2 h-5 w-5" />
                      Create visualization
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <LineChart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No file selected</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please select a file to view visualizations.
          </p>
        </div>
      )}
    </div>
  );
};

export default VisualizationSection;