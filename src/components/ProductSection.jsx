import React, { useEffect, useState } from 'react';
import { Heart, SlidersHorizontal } from 'lucide-react';
import './css/ProductSection.css';
import { Link } from 'react-router-dom';


const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6); // Shuruat mein 6 dikhayenge

  const categories = ['All', 'Bags & Backpacks', 'Decoration', 'Essentials', 'Interior'];

  const [allProducts, setAllProducts] = useState([]);
   var colors = ['#000', '#555', '#999', '#fff' , '#efefef' ]; // Har product ke liye 3 color options (example)

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => {
                    setAllProducts(data);
                     console.log('Fetched products:', data); // Debugging ke liye
                     
                })
                .catch(err => console.error('Error fetching products:', err));
        }
        catch (error) {
            console.error('Unexpected error:', error);
        }
    }, []);

    

  const handleShowMore = () => {
    setVisibleCount(allProducts.length); // Click hone par saare 9 dikha dega
  };

  return (
    <section className="product-container">
      {/* Filter Header */}
      <div className="filter-header">
        <nav className="filter-nav">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
        <button className="filter-icon-btn">
          <SlidersHorizontal size={16} />
          <span>Filter</span>
        </button>
      </div>

      {/* 3x3 Product Grid */}
      <div className="product-grid">
        {allProducts.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              {product.category && <span className="tag-new">{product.category}</span>}
              {product.count && <span className="tag-discount">{product.count}</span>}
              <div className="img-placeholder"><Link to={`product/${product.id}`}><img src={product.image} alt={product.title} /></Link></div> {/* Apni image yahan daalein */}
              <button className="wishlist-btn">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">
                {product.price && <span className="old-price">{product.price}</span>}
                <span className="current-price">{product.price}</span>
              </div>
              <div className="color-dots">
                { colors.map((color, index) => (
                  <span key={index} style={{ backgroundColor: color }} className="color-dot"></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < allProducts.length && (
        <div className="show-more-wrapper">
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSection;