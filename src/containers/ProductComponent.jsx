import React from 'react';
import { useSelector } from 'react-redux';
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const { title, category } = products[0];
    return (
        <div className="four wide column">
        <div className="ui link cards">
            <div className="card">
                <div className="image"></div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">{category}</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductComponent;
