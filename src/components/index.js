import React, { Component, useState, useEffect } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const App = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });
    
    return (
      <div>
          <h1>{count}</h1>
          <button onClick={increment}>+</button>
      </div>
    );
  };

export default App