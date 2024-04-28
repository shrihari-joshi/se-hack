import React from 'react';

const Nextpage = ({ imageUrl }) => {
    return (
        <div className="show-image-page">
            <h1 className="show-image-title">Show Image</h1>
            {imageUrl && <img className="show-image" src={imageUrl} alt="Uploaded" />}
        </div>
    );
};

export default Nextpage;
