// src/App.js
import React, { useState } from 'react';
import ExcelUploader from './components/ExcelUploader';
import IDCard from './components/IDCard';
import './App.css'; // Add some styles for ID cards

const App = () => {
    const [data, setData] = useState([]);
    const [format, setFormat] = useState('format1');

    const handleDataLoaded = (loadedData) => {
        setData(loadedData);
        setFormat('format1');
    };
   console.log('data', data)
    return (
        <div className="App">
            <h1>Card Generator</h1>
           
            <ExcelUploader onDataLoaded={handleDataLoaded} />
            
            <div>
                <select value={format} onChange={(e) => setFormat(e.target.value)}>
                    <option value="format1">Format 1</option>
                    <option value="format2">Format 2</option>
                    <option value="format3">Format 3</option>
                    <option value="format4">Format 4</option>
                    <option value="format5">Format 5</option>
                </select>
            </div> <button onClick={() => window.print()}>print</button>
            <div className="id-cards">
                {data.map((item, index) => (
                    <IDCard key={index} data={item} format={format} />
                ))}
            </div>
        </div>
    );
};

export default App;
