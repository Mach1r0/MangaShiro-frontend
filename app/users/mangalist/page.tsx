import React from 'react';

export default function mangalist() {
  const containeAll = {
    display: 'flex',
    backgroundColor: 'black', 
    width: '100%', 
    
  };

  const containerLeft = {
    display: 'flex',
    flexDirection: 'row' as const,
    marginBottom: '16px',
  };

  const containerList = {
    flexGrow: 1,
    padding: '8px',
  };

  const containerFilter = {
    margin: '0 8px',
    padding: '8px',
    borderRadius: '4px',
  };

  const containerSort = {
    margin: '0 8px',
    padding: '8px',
    borderRadius: '4px',
  };

  const containerContent = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  };

  const containerSection = {
    borderRadius: '4px',
  };

  return (
    <main>
      <div style={containeAll}>
        <div style={containerLeft}>
          <div style={containerList}>
            {/* List content here */}
          </div>

          <div style={containerFilter}>
            {/* Filter content here */}
          </div>

          <div style={containerSort}>
            {/* Sort content here */}
          </div>
        </div>

        <div style={containerContent}>
          <div style={containerSection}>
            {/* Watching content here */}
          </div>

          <div style={containerSection}>
            {/* Completed content here */}
          </div>

          <div style={containerSection}>
            {/* Dropped content here */}
          </div>

          <div style={containerSection}>
            {/* Planning content here */}
          </div>
        </div>
      </div>
    </main>
  );
}
