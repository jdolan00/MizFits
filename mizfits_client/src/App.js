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
      <h1>Hello from team 9 also known as MizFits!</h1>
    </div>
  );
}

export default App;
