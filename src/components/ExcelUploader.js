// src/components/ExcelUploader.js

import * as XLSX from 'xlsx';

const ExcelUploader = ({ onDataLoaded }) => {
    

    const handleFileChange = (e) => {
      
        const uploadedFile = e.target.files[0];
        if (uploadedFile) {
            const reader = new FileReader();

            reader.onload = (evt) => {
                const binaryStr = evt.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const data = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

                // Convert to an array of objects if needed
                const headers = data[0];
                const jsonData = data.slice(1).map(row => {
                    return headers.reduce((acc, curr, index) => {
                        acc[curr] = row[index];
                        return acc;
                    }, {});
                });

                onDataLoaded(jsonData);
            };

            reader.onerror = (error) => {
                console.error("Error reading file:", error);
            };

            reader.readAsBinaryString(uploadedFile);
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
           
        </div>
    );
};

export default ExcelUploader;
