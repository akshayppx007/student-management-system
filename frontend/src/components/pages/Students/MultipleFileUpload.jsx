// src/MultipleFileUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';
import FileViewer from 'react-file-viewer';

function MultipleFileUpload() {
  const predefinedDocuments = ['Document1', 'Document2', 'Document3']; // List of predefined document names

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState('');
  const [previewType, setPreviewType] = useState('image'); // image, pdf, word
  const [previewUrl, setPreviewUrl] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // Show the dropdown only when a document is uploaded

  const handleFileChange = (e) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
    setShowDropdown(true); // Show the dropdown after uploading a document
  };

  const handleUpload = async () => {
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append('files', file));

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data.message);
      setSelectedFiles([]);
      setSelectedDocument('');
      setPreviewType('image');
      setPreviewUrl('');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const handleDelete = async (filename) => {
    try {
      const response = await axios.delete(`http://localhost:5000/delete/${filename}`);
      console.log(response.data.message);
      setSelectedFiles(selectedFiles.filter((file) => file.name !== filename));
      if (selectedDocument === filename) {
        setSelectedDocument('');
        setPreviewType('image');
        setPreviewUrl('');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const handleDocumentSelect = (e) => {
    const selectedDocument = e.target.value;
    setSelectedDocument(selectedDocument);

    // Check if the selected document is an image (PNG or JPG)
    const imageExtensions = ['png', 'jpg', 'jpeg'];
    const extension = selectedDocument.split('.').pop().toLowerCase();
    if (imageExtensions.includes(extension)) {
      setPreviewType('image');
      setPreviewUrl(selectedDocument);
    } else if (extension === 'pdf') {
      setPreviewType('pdf');
      setPreviewUrl(selectedDocument);
    } else if (extension === 'docx') {
      setPreviewType('word');
      setPreviewUrl(selectedDocument);
    } else {
      setPreviewType('image'); // For other formats, show a default image
      setPreviewUrl('');
    }
  };

  // Extract only the file name without extension
  const getFileNameWithoutExtension = (filename) => {
    const index = filename.lastIndexOf('.');
    return index !== -1 ? filename.substring(0, index) : filename;
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {selectedFiles.length > 0 && (
        <div>
          <h2>Uploaded Files</h2>
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>
                {file.name}
                <button onClick={() => handleDelete(file.name)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showDropdown && (
        <div>
          <h2>Predefined Documents</h2>
          <select value={selectedDocument} onChange={handleDocumentSelect}>
            <option value="">Select Document</option>
            {predefinedDocuments.map((document) => (
              <option key={document} value={document}>
                {getFileNameWithoutExtension(document)}
              </option>
            ))}
            {selectedFiles.map((file) => (
              <option key={file.name} value={file.name}>
                {getFileNameWithoutExtension(file.name)}
              </option>
            ))}
          </select>
        </div>
      )}

      {previewType === 'image' && previewUrl && (
        <div>
          <h2>Selected Document Preview</h2>
          <img src={previewUrl} alt="Preview" style={{ width: '300px' }} />
          <button onClick={() => handleDelete(selectedDocument)}>Delete</button>
        </div>
      )}

      {previewType === 'pdf' && previewUrl && (
        <div>
          <h2>Selected Document Preview</h2>
          <PDFViewer width="800" height="600">
            <iframe src={previewUrl} title="Preview" frameborder="0"></iframe>
          </PDFViewer>
          <button onClick={() => handleDelete(selectedDocument)}>Delete</button>
        </div>
      )}

      {previewType === 'word' && previewUrl && (
        <div>
          <h2>Selected Document Preview</h2>
          <FileViewer fileType="docx" filePath={previewUrl} />
          <button onClick={() => handleDelete(selectedDocument)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default MultipleFileUpload;


