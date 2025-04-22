import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  BarChart2, 
  PieChart, 
  LineChart, 
  Lightbulb, 
  Grid, 
  Package, 
  LogOut, 
  File, 
  Search, 
  Plus, 
  ChevronDown, 
  Filter,
  Download,
  Share2,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell 
} from 'recharts';

import { userData, userFiles, analysisModels, visualizations, insights, chartData } from '../mockData';

// Dashboard Section
import DashboardSection from './sections/DashboardSection';
// Analysis Section
import AnalysisSection from './sections/AnalysisSection';
// Visualization Section
import VisualizationSection from './sections/VisualizationSection';
// Insights Section
import InsightsSection from './sections/InsightsSection';
// Profile Section
import ProfileSection from './sections/ProfileSection';
// Account Settings Section
import AccountSection from './sections/AccountSection';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const SidebarLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  
  // Render content based on active section
  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard':
        return <DashboardSection userFiles={userFiles} setSelectedFile={setSelectedFile} setActiveSection={setActiveSection} />;
      case 'analysis':
        return <AnalysisSection userFiles={userFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} analysisModels={analysisModels} chartData={chartData} />;
      case 'visualizations':
        return <VisualizationSection userFiles={userFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} visualizations={visualizations} chartData={chartData} />;
      case 'insights':
        return <InsightsSection userFiles={userFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} insights={insights} />;
      case 'profile':
        return <ProfileSection userData={userData} />;
      case 'account':
        return <AccountSection userData={userData} />;
      default:
        return <DashboardSection userFiles={userFiles} setSelectedFile={setSelectedFile} setActiveSection={setActiveSection} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="fixed top-0 left-0 z-50 p-4 md:hidden">
        <button
          type="button"
          onClick={toggleMobileSidebar}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span className="sr-only">Open sidebar</span>
          {isMobileSidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden" onClick={toggleMobileSidebar}></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        {/* Sidebar header */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">DataInsight AI</h2>
        </div>
        
        {/* Sidebar content */}
        <div className="p-4 h-full overflow-y-auto">
          <nav className="space-y-8">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Overview
              </h3>
              <div className="mt-2 space-y-1">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <Grid className={`mr-3 h-5 w-5 ${activeSection === 'dashboard' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Dashboard
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Data
              </h3>
              <div className="mt-2 space-y-1">
                <button
                  onClick={() => setActiveSection('analysis')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'analysis' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <BarChart2 className={`mr-3 h-5 w-5 ${activeSection === 'analysis' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Analysis
                </button>
                <button
                  onClick={() => setActiveSection('visualizations')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'visualizations' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <PieChart className={`mr-3 h-5 w-5 ${activeSection === 'visualizations' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Visualizations
                </button>
                <button
                  onClick={() => setActiveSection('insights')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'insights' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <Lightbulb className={`mr-3 h-5 w-5 ${activeSection === 'insights' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Insights
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Account
              </h3>
              <div className="mt-2 space-y-1">
                <button
                  onClick={() => setActiveSection('profile')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <User className={`mr-3 h-5 w-5 ${activeSection === 'profile' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Profile
                </button>
                <button
                  onClick={() => setActiveSection('account')}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeSection === 'account' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  <Settings className={`mr-3 h-5 w-5 ${activeSection === 'account' ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
                  Account Settings
                </button>
              </div>
            </div>
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 w-full">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`md:pl-64 flex flex-col min-h-screen`}>
        {/* Top header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-end">
            <div className="flex items-center">
              <button className="relative p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">{userData.name}</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={userData.avatar}
                  alt="User profile"
                />
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;