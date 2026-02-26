import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Facebook, Twitter, Printer } from 'lucide-react';
import './css/ProductDetail.css';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Mock data for Related Products (matching your image)
  // const relatedProducts = [
  //   { id: 101, name: 'Knit Stripe Bag', price: 29.00, image: 'path-to-bag1.jpg', colors: ['#2b6cb0', '#2d3748', '#fff'] },
  //   { id: 102, name: 'Sponge Bag', price: 59.00, image: 'path-to-bag2.jpg' },
  //   { id: 103, name: 'Specs Sunglasses', price: 109.00, image: 'path-to-specs.jpg' },
  //   { id: 104, name: 'Multi Device Bag', price: 55.00, image: 'path-to-bag3.jpg' },
  // ];
  const getRandomIds = (count, max) => {
    const ids = new Set();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(ids);
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
      .catch(err => console.error('Error fetching product details:', err));

      // Related Products Fetch (Random 4)
    const randomIds = getRandomIds(4, 20);
    
    // Promise.all use karke saare products ek saath fetch karenge
    Promise.all(randomIds.map(id => 
      fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json())
    ))
    .then(data => setRelatedProducts(data))
    .catch(err => console.error('Error fetching related products:', err));


  }, [id]);

  return (
    <div className="page-wrapper">
      <section className="product-detail-container">
        {/* Breadcrumbs & Nav */}
        <div className="product-nav">
          <div className="breadcrumbs">
            Shop / Bags & Backpacks / <span>{product?.title || 'Product Details'}</span>
          </div>
          <div className="nav-arrows">
            <ChevronLeft size={16} />
            <ChevronRight size={16} />
          </div>
        </div>

        <div className="product-main-content">
          {/* Left: Thumbnails */}
          <div className="product-gallery">
            <div className="thumbnail active">
              <img src={product?.image || "thumb1.jpg"} alt="thumb" />
            </div>
            <div className="thumbnail">
              <img src={product?.image || "thumb1.jpg"} alt="thumb" />
            </div>
          </div>

          {/* Center: Main Image */}
          <div className="product-image-main">
            <img src={product?.image || "henry-backpack.jpg"} alt={product?.title || "Henry Backpack"} />
            <div className="zoom-icon">+</div>
          </div>

          {/* Right: Product Info */}
          <div className="product-info-side">
            <h1 className="product-name">{product?.title || "Henry Backpack"}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="#333" />)}
                <Star size={14} fill="#ccc" stroke="none" />
              </div>
              <span className="reviews-count">(1 customer review)</span>
            </div>

            <div className="product-price-large">${product?.price || 79.00}</div>

            <p className="product-description">
              Designed for simplicity and made from high quality materials. 
              Its sleek geometry and material combinations creates a modern personalized look.
            </p>

            <div className="purchase-actions">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>‹</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>›</button>
              </div>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>

            <div className="product-meta-actions">
              <button className="meta-btn"><Heart size={16} /> Wishlist</button>
              <div className="share-icons">
                <Facebook size={16} />
                <Twitter size={16} />
                <Printer size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* --- Related Products Section --- */}
        {/* --- Related Products Section --- */}
        <div className="related-products-section">
          <h2 className="related-title">Related products</h2>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <div key={item.id} className="related-card">
                <div className="related-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="related-info">
                  <div className="related-header">
                    <span className="related-name">{item.title}</span>
                    <Heart size={16} className="wishlist-icon-small" />
                  </div>
                  <span className="related-price">${item.price.toFixed(2)}</span>
                  
                  {/* FakeStoreAPI mein colors nahi hote, toh hum design balance ke liye static dots dikha sakte hain */}
                  <div className="color-dots">
                    <span className="dot" style={{ backgroundColor: '#2b6cb0' }}></span>
                    <span className="dot" style={{ backgroundColor: '#14b8a6' }}></span>
                    <span className="dot" style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;