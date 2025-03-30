const TimeRangeTabs = ({ active, onChange }) => {
    const tabs = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];
  
    return (
      <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button style={{ border: 'none', background: 'none', color: '#555', cursor: 'pointer' }}>
          ⛶ Fullscreen
        </button>
        <button style={{ border: 'none', background: 'none', color: '#555', cursor: 'pointer' }}>
          ＋ Compare
        </button>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              style={{
                padding: '4px 10px',
                borderRadius: '5px',
                background: tab === active ? '#4B49F9' : '#f0f0f0',
                color: tab === active ? 'white' : 'black',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default TimeRangeTabs;
  