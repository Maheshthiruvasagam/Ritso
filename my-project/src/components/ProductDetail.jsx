import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('default');
  const [addedToCart, setAddedToCart] = useState(false);

  // If no product, redirect to shop
  if (!product) {
    navigate('/shop');
    return null;
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'default', color: '#8B7355' },
    { name: 'black', color: '#000000' },
    { name: 'white', color: '#FFFFFF' },
    { name: 'navy', color: '#1e293b' }
  ];

  // Multiple product images (using variations of the same image)
  const productImages = [
    product.image,
    product.image + '&random=1',
    product.image + '&random=2',
    product.image + '&random=3'
  ];

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
      totalPrice: (product.price * quantity).toFixed(2)
    };
    
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      fontFamily: "'Montserrat', sans-serif"
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
    navInner: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px'
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      cursor: 'pointer'
    },
    backButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'transparent',
      border: '2px solid #e5e7eb',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    cartBadge: {
      position: 'relative',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    mainContent: {
      paddingTop: '100px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '100px 2rem 4rem'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start'
    },
    imageSection: {
      position: 'sticky',
      top: '100px'
    },
    mainImage: {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
      borderRadius: '1.5rem',
      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
      marginBottom: '1.5rem',
      animation: 'fadeIn 0.5s ease-out'
    },
    thumbnails: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem'
    },
    thumbnail: {
      width: '100%',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: '3px solid transparent'
    },
    thumbnailActive: {
      border: '3px solid #16a34a',
      transform: 'scale(1.05)'
    },
    productInfo: {
      backgroundColor: '#ffffff',
      padding: '3rem',
      borderRadius: '1.5rem',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      animation: 'slideInRight 0.6s ease-out'
    },
    category: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#16a34a',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '0.75rem'
    },
    productName: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem'
    },
    stars: {
      display: 'flex',
      gap: '0.25rem'
    },
    reviewText: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    price: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#16a34a',
      marginBottom: '1.5rem',
      fontFamily: "'Playfair Display', serif"
    },
    description: {
      fontSize: '1rem',
      color: '#6b7280',
      lineHeight: '1.75',
      marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid #e5e7eb'
    },
    optionSection: {
      marginBottom: '2rem'
    },
    optionLabel: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#111',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '1rem'
    },
    sizeGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '0.75rem'
    },
    sizeButton: {
      padding: '0.75rem',
      border: '2px solid #e5e7eb',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textAlign: 'center'
    },
    sizeButtonActive: {
      border: '2px solid #16a34a',
      backgroundColor: '#16a34a',
      color: '#ffffff'
    },
    colorGrid: {
      display: 'flex',
      gap: '1rem'
    },
    colorButton: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      border: '3px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    colorButtonActive: {
      border: '3px solid #16a34a',
      transform: 'scale(1.15)',
      boxShadow: '0 6px 16px rgba(22, 163, 74, 0.4)'
    },
    quantitySection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '2rem'
    },
    quantityButton: {
      width: '48px',
      height: '48px',
      border: '2px solid #e5e7eb',
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      fontSize: '1.25rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    quantityDisplay: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      minWidth: '60px',
      textAlign: 'center'
    },
    buttonGroup: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      marginBottom: '2rem'
    },
    addToCartButton: {
      padding: '1.25rem',
      backgroundColor: '#111',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    buyNowButton: {
      padding: '1.25rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    successMessage: {
      padding: '1rem',
      backgroundColor: '#d1fae5',
      color: '#065f46',
      borderRadius: '0.75rem',
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: '1rem',
      animation: 'slideDown 0.5s ease-out'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem',
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid #e5e7eb'
    },
    feature: {
      textAlign: 'center'
    },
    featureIcon: {
      fontSize: '2rem',
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .thumbnail:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        
        .back-button:hover {
          border-color: #16a34a;
          color: #16a34a;
        }
        
        .cart-badge:hover {
          background-color: #15803d;
          transform: scale(1.05);
        }
        
        .size-button:hover {
          border-color: #16a34a;
          transform: scale(1.05);
        }
        
        .color-button:hover {
          transform: scale(1.1);
        }
        
        .quantity-button:hover {
          border-color: #16a34a;
          background-color: #f0fdf4;
        }
        
        .add-to-cart-button:hover {
          background-color: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(22, 163, 74, 0.3);
        }
        
        .buy-now-button:hover {
          background-color: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(22, 163, 74, 0.4);
        }
        
        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
          
          .image-section {
            position: static !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button 
              onClick={() => navigate('/shop')} 
              style={styles.backButton}
              className="back-button"
            >
              ← Back to Shop
            </button>
            <button 
              onClick={() => navigate('/cart')}
              style={styles.cartBadge}
              className="cart-badge"
            >
              🛒 Cart
              {JSON.parse(localStorage.getItem('cart') || '[]').length > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  {JSON.parse(localStorage.getItem('cart') || '[]').length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {addedToCart && (
          <div style={styles.successMessage}>
            ✓ Product added to cart successfully!
          </div>
        )}

        <div style={styles.productGrid} className="product-grid">
          {/* Image Section */}
          <div style={styles.imageSection} className="image-section">
            <img 
              src={productImages[selectedImage]}
              alt={product.name}
              style={styles.mainImage}
            />
            <div style={styles.thumbnails}>
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  style={{
                    ...styles.thumbnail,
                    ...(selectedImage === index ? styles.thumbnailActive : {})
                  }}
                  className="thumbnail"
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div style={styles.productInfo}>
            <div style={styles.category}>{product.category}</div>
            <h1 style={styles.productName}>{product.name}</h1>
            
            <div style={styles.rating}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db', fontSize: '1.25rem' }}>
                    ★
                  </span>
                ))}
              </div>
              <span style={styles.reviewText}>
                {product.rating} ({Math.floor(Math.random() * 500) + 100} Reviews)
              </span>
            </div>

            <div style={styles.price}>${product.price}</div>

            <p style={styles.description}>
              Premium quality {product.category} crafted with exceptional attention to detail. 
              Made from the finest materials for ultimate comfort and style. Perfect for any occasion, 
              this piece combines contemporary design with timeless elegance.
            </p>

            {/* Size Selection */}
            <div style={styles.optionSection}>
              <div style={styles.optionLabel}>Select Size</div>
              <div style={styles.sizeGrid}>
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      ...styles.sizeButton,
                      ...(selectedSize === size ? styles.sizeButtonActive : {})
                    }}
                    className="size-button"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div style={styles.optionSection}>
              <div style={styles.optionLabel}>Select Color</div>
              <div style={styles.colorGrid}>
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{
                      ...styles.colorButton,
                      backgroundColor: color.color,
                      ...(selectedColor === color.name ? styles.colorButtonActive : {})
                    }}
                    className="color-button"
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={styles.optionSection}>
              <div style={styles.optionLabel}>Quantity</div>
              <div style={styles.quantitySection}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={styles.quantityButton}
                  className="quantity-button"
                >
                  −
                </button>
                <div style={styles.quantityDisplay}>{quantity}</div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={styles.quantityButton}
                  className="quantity-button"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={styles.buttonGroup}>
              <button
                onClick={handleAddToCart}
                style={styles.addToCartButton}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                style={styles.buyNowButton}
                className="buy-now-button"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div style={styles.features}>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>🚚</div>
                <div style={styles.featureText}>Free Shipping</div>
              </div>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>🔄</div>
                <div style={styles.featureText}>Easy Returns</div>
              </div>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>✨</div>
                <div style={styles.featureText}>Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;