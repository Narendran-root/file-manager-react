import React, { useState } from 'react';
import styles from '../style.module.css';

const FileUpload = () => {
  const [fileInfo, setFileInfo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileInfo({
        name: file.name,
        size: file.size,
        type: file.type,
      });
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      {fileInfo && (
        <div>
          <p>Name: {fileInfo.name}</p>
          <p>Type: {fileInfo.type}</p>
          <p>Size: {fileInfo.size} bytes</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
