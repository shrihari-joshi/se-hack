
import React from 'react';
import './Bin.css'; // Import the CSS file for styling

const ProductBins = () => {
    return (
        <div className="product-bins-container">
            {/* Product Bin 1 */}
            <div className="product-bin">
                <div className="img1"></div>
                <div className="product-info">
                    <h3>Product 1</h3>
                    <p>Description of Product 1</p>
                    <p>$10.99</p>
                </div>
            </div>

            {/* Product Bin 2 */}
            <div className="product-bin">
                <div className="img2"></div>
                <div className="product-info">
                    <h3>Product 2</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>
            <div className="product-bin">
                <div className="img3"></div>
                <div className="product-info">
                    <h3>Product 3</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>
            <div className="product-bin">
                <div className="img4"></div>
                <div className="product-info">
                    <h3>Product 4</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>
            <div className="product-bin">
                <div className="img5"></div>
                <div className="product-info">
                    <h3>Product 5</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>
            <div className="product-bin">
                <div className="img6"></div>
                <div className="product-info">
                    <h3>Product 6</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>
            <div className="product-bin">
                <div className="img7"></div>
                <div className="product-info">
                    <h3>Product 7</h3>
                    <p>Description of Product 2</p>
                    <p>$8.99</p>
                </div>
            </div>

            {/* Add more product bins as needed */}
        </div>
    );
};

export default ProductBins;