const NavTabs = ({ activeTab, onTabChange }) => {
    const tabs = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];
  
    return (
      <div style={{ display: 'flex', gap: '30px', marginBottom: '20px', borderBottom: '1px solid #eee' }}>
        {tabs.map(tab => (
          <div
            key={tab}
            onClick={() => onTabChange(tab)}
            style={{
              paddingBottom: '10px',
              borderBottom: tab === activeTab ? '2px solid #4B49F9' : 'none',
              fontWeight: tab === activeTab ? 'bold' : 'normal',
              cursor: 'pointer',
            }}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  };
  
  export default NavTabs;
  