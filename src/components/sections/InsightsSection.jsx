import React, { useState, useEffect } from 'react';
import { Lightbulb, Filter, Download, Search } from 'lucide-react';

const InsightsSection = ({ userFiles, selectedFile, setSelectedFile, insights }) => {
  const [activeInsights, setActiveInsights] = useState([]);
  
  useEffect(() => {
    if (selectedFile) {
      // Filter insights for this file
      const fileInsights = insights.filter(insight => insight.fileId === selectedFile.id);
      setActiveInsights(fileInsights);
    } else {
      setActiveInsights([]);
    }
  }, [selectedFile, insights]);
  
  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high':
        return 'border-red-400 bg-red-50';
      case 'medium':
        return 'border-yellow-400 bg-yellow-50';
      default:
        return 'border-blue-400 bg-blue-50';
    }
  };
  
  const getSeverityTextColor = (severity) => {
    switch(severity) {
      case 'high':
        return 'text-red-700';
      case 'medium':
        return 'text-yellow-700';
      default:
        return 'text-blue-700';
    }
  };
  
  const getSeverityIconColor = (severity) => {
    switch(severity) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      default:
        return 'text-blue-500';
    }
  };
  
  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
          <p className="text-gray-600">Automated findings and recommendations from your data</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Lightbulb className="-ml-1 mr-2 h-5 w-5" />
          Generate Insights
        </button>
      </div>
      
      {/* File selector */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-sm font-medium text-gray-900">Select a file to view insights</h3>
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
                Insights for {selectedFile.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                AI-generated insights based on your data patterns
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              {activeInsights.length > 0 ? (
                activeInsights.map(insight => (
                  <div key={insight.id} className={`border-l-4 ${getSeverityColor(insight.severity)} rounded-lg overflow-hidden px-4 py-3`}>
                    <div className="flex items-start">
                      <Lightbulb className={`h-5 w-5 ${getSeverityIconColor(insight.severity)} mr-2 mt-0.5 flex-shrink-0`} />
                      <div>
                        <h4 className={`font-medium ${getSeverityTextColor(insight.severity)}`}>{insight.title}</h4>
                        <p className="text-gray-700 mt-1">{insight.description}</p>
                        <div className="mt-3 bg-white bg-opacity-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-gray-900">Suggested Action:</p>
                          <p className="text-sm text-gray-600">{insight.action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Lightbulb className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No insights found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    No insights have been generated for this file yet.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Lightbulb className="-ml-1 mr-2 h-5 w-5" />
                      Generate insights
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-8 text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No file selected</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please select a file to view insights.
          </p>
        </div>
      )}
    </div>
  );
};

export default InsightsSection;