import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Facebook, Twitter, Printer } from 'lucide-react';
import './css/ProductDetail.css';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched product details:', data); // Debugging ke liye
        setProduct(data);
        // Yahan product details ko state mein set kar sakte hain agar zarurat ho
      })
      .catch(err => console.error('Error fetching product details:', err));
  }, [id]);

  return (
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
    </section>
  );
};

export default ProductDetail;