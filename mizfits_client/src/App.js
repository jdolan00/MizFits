import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState("");

  useEffect(() => {
    fetch('/')
      .then(response => response.json())
      .then(data => setBackendData(data.message));
  }, []);

  return (
    <div>
      {backendData === "" ? (
        <p>Loading...</p>
      ) : (
        <p>{backendData}</p>
      )}
    </div>
  );
}

export default App;
