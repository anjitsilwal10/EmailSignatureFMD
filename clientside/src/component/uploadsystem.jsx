import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../component/css/uploadSystem.css';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [uploadedImages, setUploadedImages] = useState([]); // Initialize as an empty array
    const [errorMessage, setErrorMessage] = useState('');
    const [showImages, setShowImages] = useState(false); // State variable to track if images should be displayed
    const [clickedImagePath, setClickedImagePath] = useState('');


    useEffect(() => {
        fetchUploadedImages(); // Fetch uploaded images on component mount
    }, []);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
        setUploadedImages([]); // Clear previously uploaded images when a new file is selected
        setShowImages(false); // Hide images when a new file is selected
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setErrorMessage('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            window.alert('Image uploaded successfully');
            setShowImages(true); // Show images after successful upload
            setErrorMessage(''); // Clear error message
            fetchUploadedImages(); // Fetch updated list of uploaded images
        } catch (error) {
            console.error('Error uploading file:', error);
            setErrorMessage('Error uploading file');
        }
    };
    const handleImageClick = (imagePath) => {
        setClickedImagePath(imagePath);
        setShowImages(false);
    };

    const fetchUploadedImages = async () => {
        try {
            const response = await axios.get('http://localhost:3000/uploads');
            console.log(response.data); // Log response data to verify format
            // Destructure the response data to extract imagePath and fileName
            const uploadedImages = response.data.map(({ imagePath, fileName }) => ({ imagePath, fileName }));
            setUploadedImages(uploadedImages || []); // Set uploaded images state with server response or empty array if response is falsy
        } catch (error) {
            console.error('Error fetching uploaded images:', error);
            setErrorMessage('Error fetching uploaded images');
        }
    };

    useEffect(() => {
        console.log("Clicked Image Path:", clickedImagePath);
      }, [clickedImagePath]);


    return (
            
            (!clickedImagePath && (
            <div className='container'>
              <h2>Upload Image</h2>
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
              </form>
          
              {file && (
                <div className='render-image'>
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ maxWidth: '150px', maxHeight: '150px' }}
                    alt='Uploaded Preview'
                  />
                </div>
              )}
          
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          
              {!showImages && (
                <button className='show-button' onClick={() => setShowImages(true)}>Uploaded Images</button>
              )}
          
              {showImages && (
                <div className='uploaded-images'>
                  {Array.isArray(uploadedImages) && uploadedImages.map((image, index) => (
                    <div className='images-container' key={index}>
                      <img
                        src={image.imagePath}
                        alt={image.fileName}
                        onClick={() => handleImageClick(image.imagePath)} // Call handleImageClick function on click
                        className='gallery-image'
                      />
                      <p>{image.fileName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>))
          
          
    );
}

export default FileUpload;
