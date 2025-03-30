import React, { useState } from 'react';
import TopBar from './TopBar';
import NavTabs from './NavTabs';
import TimeRangeTabs from './TimeRangeTabs';
import LineChart from './LineChart';

const tabOptions = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

const ChartTabPage = () => {
  const [activeTab, setActiveTab] = useState('Chart');
  const [range, setRange] = useState('1w');

  const renderContent = () => {
    switch (activeTab) {
      case 'Summary':
        return <div style={dummyStyle}>📋 Summary content goes here...</div>;
      case 'Chart':
        return (
          <>
            <TimeRangeTabs active={range} onChange={setRange} />
            <LineChart range={range} />
          </>
        );
      case 'Statistics':
        return <div style={dummyStyle}>📊 Statistics content goes here...</div>;
      case 'Analysis':
        return <div style={dummyStyle}>🔍 Analysis content goes here...</div>;
      case 'Settings':
        return <div style={dummyStyle}>⚙️ Settings content goes here...</div>;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        padding: '20px 0',
        background: 'linear-gradient(to bottom, #ffffff, #f9f9ff)',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div style={{ padding: '0 20px' }}>
        <TopBar />
        <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
};

const dummyStyle = {
  padding: '40px 20px',
  fontSize: '18px',
  color: '#333',
  background: 'white',
  borderRadius: '12px',
  marginTop: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

export default ChartTabPage;
