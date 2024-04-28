import React, { useState } from 'react';

const Pdf = ({ onImageUpload }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = () => {
        if (image) {
            onImageUpload(image);
        }
    };

    return (
        <div className="upload-page">
            <h1 className="upload-title">Upload Image</h1>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button className="upload-button" onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Pdf;
