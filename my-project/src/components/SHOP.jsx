import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ShopPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const highlightedProduct = location.state?.product;
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const allProducts = [
    { id: 1, name: 'Bright Long Sleeve Top', price: 45.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', category: 'tops' },
    { id: 2, name: 'Black Long Tailored Jacket', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop', category: 'jackets' },
    { id: 3, name: 'Textured Cropped top', price: 34.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop', category: 'tops' },
    { id: 4, name: 'Relaxed Casual Shirt', price: 52.00, rating: 4.5, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop', category: 'shirts' },
    { id: 5, name: 'White Striped Button Top', price: 38.00, rating: 4.6, image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop', category: 'tops' },
    { id: 6, name: 'Light Blue Tie Dye Shirt', price: 42.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', category: 'shirts' },
    { id: 7, name: 'Grey Hooded Pullover', price: 54.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop', category: 'hoodies' },
    { id: 8, name: 'Minimal Loose T-Shirt', price: 28.00, rating: 4.3, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', category: 'tshirts' },
    { id: 9, name: 'Oversized Blazer Shirt', price: 68.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop', category: 'blazers' },
    { id: 10, name: 'Textured Jacket', price: 95.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=300&h=400&fit=crop', category: 'jackets' },
    { id: 11, name: 'Solid Round Neck T-Shirt', price: 24.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=400&fit=crop', category: 'tshirts' },
    { id: 12, name: 'Bold Print Kimono', price: 125.00, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=400&fit=crop', rating: 4.9, category: 'designer' },
    { id: 13, name: 'Elegant Black Lace Top', price: 89.00, image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=400&fit=crop', rating: 4.8, category: 'designer' },
    { id: 14, name: 'Modern Power Suit', price: 245.00, image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=300&h=400&fit=crop', rating: 5.0, category: 'suits' }
  ];

  const categories = ['all', 'tops', 'jackets', 'shirts', 'hoodies', 'tshirts', 'blazers', 'designer', 'suits'];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: "'Montserrat', sans-serif"
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    navInner: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem',
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
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'color 0.3s'
    },
    cartButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      position: 'relative'
    },
    mainContent: {
      paddingTop: '100px',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '100px 1.5rem 3rem'
    },
    header: {
      marginBottom: '3rem'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      marginBottom: '1rem'
    },
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '3rem',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    categories: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    categoryButton: {
      padding: '0.5rem 1.5rem',
      border: '2px solid #e5e7eb',
      backgroundColor: '#ffffff',
      borderRadius: '2rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textTransform: 'capitalize'
    },
    categoryButtonActive: {
      backgroundColor: '#16a34a',
      borderColor: '#16a34a',
      color: '#ffffff'
    },
    sortSelect: {
      padding: '0.5rem 1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      outline: 'none'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2rem'
    },
    productCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    highlightedCard: {
      border: '3px solid #16a34a',
      animation: 'pulse 2s ease-in-out'
    },
    productImageContainer: {
      overflow: 'hidden',
      backgroundColor: '#f3f4f6',
      height: '320px',
      position: 'relative'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    quickViewBadge: {
      position: 'absolute',
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%) translateY(50px)',
      opacity: 0,
      transition: 'all 0.3s',
      backgroundColor: '#ffffff',
      padding: '0.5rem 1.5rem',
      borderRadius: '2rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    },
    productInfo: {
      padding: '1.5rem'
    },
    productName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#111',
      marginBottom: '0.5rem'
    },
    productFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '0.75rem'
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#16a34a'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
        }
        
        .product-card:hover img {
          transform: scale(1.1);
        }
        
        .product-card:hover .quick-view-badge {
          transform: translateX(-50%) translateY(0) !important;
          opacity: 1 !important;
        }
        
        .nav-link:hover {
          color: #16a34a;
        }
        
        .category-button:hover {
          border-color: #16a34a;
          color: #16a34a;
        }
        
        .cart-button:hover {
          background-color: #15803d;
          transform: scale(1.05);
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          50% { box-shadow: 0 0 0 20px rgba(22, 163, 74, 0); }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={styles.navLinks}>
              <button onClick={() => navigate('/')} style={styles.navLink} className="nav-link">HOME</button>
              <button onClick={() => navigate('/shop')} style={{...styles.navLink, color: '#16a34a', fontWeight: '600'}} className="nav-link">SHOP</button>
              <button onClick={() => navigate('/features')} style={styles.navLink} className="nav-link">FEATURES</button>
              <button onClick={() => navigate('/contact')} style={styles.navLink} className="nav-link">CONTACT</button>
            </div>
            <button 
              onClick={() => navigate('/cart')}
              style={styles.cartButton}
              className="cart-button"
            >
              🛒 Cart ({JSON.parse(localStorage.getItem('cart') || '[]').length})
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.title}>Shop All Products</h1>
          {highlightedProduct && (
            <p style={{ color: '#16a34a', fontSize: '1.125rem', fontWeight: '500' }}>
              Showing results for: {highlightedProduct.name}
            </p>
          )}
        </div>

        <div style={styles.controls}>
          <div style={styles.categories}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.categoryButton,
                  ...(selectedCategory === category ? styles.categoryButtonActive : {})
                }}
                className="category-button"
              >
                {category}
              </button>
            ))}
          </div>

          <select 
            style={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div style={styles.productGrid}>
          {sortedProducts.map(product => (
            <div 
              key={product.id}
              style={{
                ...styles.productCard,
                ...(highlightedProduct?.id === product.id ? styles.highlightedCard : {})
              }}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div style={styles.productImageContainer}>
                <img 
                  src={product.image}
                  alt={product.name}
                  style={styles.productImage}
                />
                <div style={styles.quickViewBadge} className="quick-view-badge">
                  Quick View
                </div>
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.productFooter}>
                  <span style={styles.productPrice}>${product.price}</span>
                  <span style={{ color: '#fbbf24', fontSize: '0.875rem' }}>⭐ {product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;