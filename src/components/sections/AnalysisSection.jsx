import React, { useState, useEffect } from 'react';
import { LineChart, BarChart2, Search, Filter, ArrowRight, Download, Share2, User, Lightbulb } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart as RechartsBarChart, Bar } from 'recharts';

const AnalysisSection = ({ userFiles, selectedFile, setSelectedFile, analysisModels, chartData }) => {
  const [activeAnalysis, setActiveAnalysis] = useState(null);
  
  useEffect(() => {
    if (selectedFile) {
      // Find analyses for this file
      const fileAnalyses = analysisModels.filter(model => model.fileId === selectedFile.id);
      if (fileAnalyses.length > 0) {
        setActiveAnalysis(fileAnalyses[0]);
      } else {
        setActiveAnalysis(null);
      }
    } else {
      setActiveAnalysis(null);
    }
  }, [selectedFile, analysisModels]);
  
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analysis</h1>
          <p className="text-gray-600">Explore and manage your data analyses</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <ArrowRight className="-ml-1 mr-2 h-5 w-5" />
          New Analysis
        </button>
      </div>
      
      {/* File selector and filters */}
      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
              placeholder="Search analyses..."
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <select className="focus:ring-blue-500 focus:border-blue-500 h-full py-2 pl-3 pr-7 border-gray-300 rounded-md text-gray-500 sm:text-sm">
                <option>All file types</option>
                <option>CSV</option>
                <option>Excel</option>
                <option>JSON</option>
              </select>
            </div>
            
            <div>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Analysis List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Your Analyses</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {userFiles.map((file) => (
            <li 
              key={file.id} 
              className={`hover:bg-gray-50 cursor-pointer ${selectedFile?.id === file.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}
              onClick={() => setSelectedFile(file)}
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0">
                    <div className="flex-shrink-0">
                      {file.type === 'sales' && <BarChart2 className="h-8 w-8 text-blue-500" />}
                      {file.type === 'customer' && <User className="h-8 w-8 text-green-500" />}
                      {file.type === 'marketing' && <LineChart className="h-8 w-8 text-purple-500" />}
                      {['inventory', 'traffic'].includes(file.type) && <BarChart2 className="h-8 w-8 text-orange-500" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-blue-600 truncate">{file.name}</h4>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <p>Last analyzed: {file.date}</p>
                        <p className="ml-4 border-l border-gray-300 pl-4">{file.type.charAt(0).toUpperCase() + file.type.slice(1)} Analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button className="mr-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                      View
                    </button>
                    <button className="mr-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                    <button className="text-sm font-medium text-gray-500 hover:text-gray-700">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Analysis Details */}
      {selectedFile && (
        <div className="mt-6 bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Analysis Details: {selectedFile.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                Analysis models and data exploration results
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-900 mb-3">Applied Analysis Models</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisModels
                  .filter(model => model.fileId === selectedFile.id)
                  .map(model => (
                    <div 
                      key={model.id} 
                      className={`border rounded-lg p-4 cursor-pointer ${activeAnalysis?.id === model.id ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-200 hover:bg-blue-50'}`}
                      onClick={() => setActiveAnalysis(model)}
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                          <LineChart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{model.name}</h5>
                          <p className="text-sm text-gray-600">{model.description}</p>
                          <div className="mt-2 flex items-center">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                              {model.confidence}% confidence
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-md font-medium text-gray-900 mb-3">Data Profile</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Rows</p>
                    <p className="font-medium">{selectedFile.rows.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Columns</p>
                    <p className="font-medium">{selectedFile.columns}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Missing Values</p>
                    <p className="font-medium">{selectedFile.missingValues} ({((selectedFile.missingValues / (selectedFile.rows * selectedFile.columns)) * 100).toFixed(2)}%)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duplicate Rows</p>
                    <p className="font-medium">{selectedFile.duplicateRows}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {activeAnalysis && (
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-md font-medium text-gray-900 mb-3">Analysis Results: {activeAnalysis.name}</h4>
                
                {/* Sample chart for the analysis */}
                <div className="h-64 border rounded-lg bg-gray-50 p-4 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    {selectedFile.type === 'sales' ? (
                      <RechartsLineChart data={chartData.sales} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" name="Actual" stroke="#8884d8" strokeWidth={2} />
                        <Line type="monotone" dataKey="target" name="Target" stroke="#82ca9d" strokeWidth={2} strokeDasharray="5 5" />
                      </RechartsLineChart>
                    ) : (
                      <RechartsBarChart data={chartData.products} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                      </RechartsBarChart>
                    )}
                  </ResponsiveContainer>
                </div>
                
                {/* Insights from this analysis */}
                <div className="space-y-3">
                  {activeAnalysis.insights.map((insight, index) => (
                    <div key={index} className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisSection;