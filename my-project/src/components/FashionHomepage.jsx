import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// SVG Icons as components
const ShoppingCartIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg style={{ width: '20px', height: '20px' }} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const FashionHomepage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  // STATE FOR TABS AND SEARCH
  const [activeTab, setActiveTab] = useState('SALE');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bestSellingProducts = [
    { id: 1, name: 'Bright Long Sleeve Top', price: 45.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', category: 'tops' },
    { id: 2, name: 'Black Long Tailored Jacket', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop', category: 'jackets' },
    { id: 3, name: 'Textured Cropped top', price: 34.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop', category: 'tops' }
  ];

  const products = [
    { id: 4, name: 'Relaxed Casual Shirt', price: 52.00, rating: 4.5, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop', tags: ['SALE', 'NEW ARRIVALS'] },
    { id: 5, name: 'White Striped Button Top', price: 38.00, rating: 4.6, image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop', tags: ['SALE', 'HOT'] },
    { id: 6, name: 'Light Blue Tie Dye Shirt', price: 42.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', tags: ['HOT', 'NEW ARRIVALS'] },
    { id: 7, name: 'Grey Hooded Pullover', price: 54.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop', tags: ['SALE', 'ACCESSORIES'] },
    { id: 8, name: 'Minimal Loose T-Shirt', price: 28.00, rating: 4.3, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', tags: ['SALE'] },
    { id: 9, name: 'Oversized Blazer Shirt', price: 68.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop', tags: ['HOT', 'ACCESSORIES'] },
    { id: 10, name: 'Textured Jacket', price: 95.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=300&h=400&fit=crop', tags: ['NEW ARRIVALS', 'ACCESSORIES'] },
    { id: 11, name: 'Solid Round Neck T-Shirt', price: 24.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=400&fit=crop', tags: ['SALE', 'HOT'] }
  ];

  const clientTestimonials = [
    { id: 1, name: 'Ana Walter', text: 'This is the best thing that happened to my small business. They re-branded, re-organized and re-vamped my company in no time.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { id: 2, name: 'Zahid Miles', text: 'They are great. They did exactly what I needed. The friendly chaps are real problem solvers. Loved working with them.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { id: 3, name: 'Casper Leigh', text: 'Awesome services. I am really happy to be here because of their services. I will continue to use their services in the future.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { id: 4, name: 'Cian Reyes', text: 'By far the best thing about this is the efficient team they have put together. Everyone is so knowledgeable and friendly.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop' },
    { id: 5, name: 'John Doe', text: 'Just wow. I knew I was going to get a great service, but they went above and beyond my expectations.', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop' },
  ];

  // FILTERING LOGIC: Search overrides tabs, or works with them
  // Logic: If search has text, filter ALL products by name. If no text, filter by activeTab.
  const filteredProducts = products.filter(product => {
      if (searchQuery.trim().length > 0) {
          return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return product.tags.includes(activeTab);
  });

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleExploreNow = () => {
    navigate('/shop');
  };
  
  const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
      if (isSearchOpen) {
          setSearchQuery(''); // Clear search when closing
      }
  };

  const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      // Auto scroll to products section when searching
      if(e.target.value.length === 1) {
          const productSection = document.getElementById('our-products');
          if(productSection) productSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: "'Montserrat', sans-serif",
      overflowX: 'hidden'
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
      margin: 0,
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0
    },
    navIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    },
    iconButton: {
      padding: '0.5rem',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginButton: {
      padding: '0.625rem 1.5rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    searchInput: {
        width: '100%',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        border: '1px solid #ddd',
        outline: 'none',
        fontSize: '0.9rem',
        backgroundColor: '#f9fafb',
        transition: 'all 0.3s'
    },
    heroSection: {
      position: 'relative',
      paddingTop: '8rem',
      paddingBottom: '5rem',
      padding: '8rem 1.5rem 5rem',
      background: 'radial-gradient(circle at 20% 50%, rgba(144, 238, 144, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 139, 34, 0.1) 0%, transparent 50%)',
      overflow: 'hidden'
    },
    heroInner: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center'
    },
    heroContent: {
      animation: 'fadeInLeft 0.8s ease-out forwards'
    },
    heroTitle: {
      fontSize: '4.5rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      lineHeight: '1.1',
      marginBottom: '2rem'
    },
    heroTitleGreen: {
      color: '#16a34a'
    },
    heroText: {
      fontSize: '1.125rem',
      color: '#4b5563',
      lineHeight: '1.75',
      marginBottom: '2rem',
      maxWidth: '36rem'
    },
    exploreButton: {
      padding: '1rem 2rem',
      backgroundColor: '#111',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      transition: 'all 0.3s',
      position: 'relative',
      overflow: 'hidden'
    },
    heroImageContainer: {
      position: 'relative',
      animation: 'fadeInRight 0.8s ease-out 0.2s forwards',
      opacity: 0
    },
    heroImageBox: {
      position: 'relative',
      background: 'linear-gradient(135deg, #90EE90, #C1FFC1)',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
    },
    heroImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '1rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
    },
    section: {
      padding: '5rem 1.5rem',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#111',
      position: 'relative',
      display: 'inline-block',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '4rem',
      maxWidth: '42rem',
      margin: '0 auto 4rem'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
      marginBottom: '3rem'
    },
    productCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    productImageContainer: {
      overflow: 'hidden',
      backgroundColor: '#f3f4f6',
      height: '320px'
    },
    productImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    productInfo: {
      padding: '1.5rem'
    },
    productName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#111',
      marginBottom: '0.5rem'
    },
    productFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#16a34a'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem'
    },
    ratingText: {
      color: '#374151',
      fontWeight: '500'
    },
    seeMoreButton: {
      padding: '0.75rem 2rem',
      border: '2px solid #111',
      backgroundColor: 'transparent',
      color: '#111',
      fontWeight: '600',
      borderRadius: '0.375rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'block',
      margin: '0 auto'
    },
    testimonialSection: {
        padding: '6rem 0',
        backgroundColor: '#f9fafb',
        overflow: 'hidden'
    },
    testimonialContainer: {
        display: 'flex',
        width: 'max-content',
        animation: 'scroll 30s linear infinite',
    },
    testimonialCard: {
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '2rem',
        margin: '0 1rem',
        width: '350px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        transition: 'transform 0.3s ease',
        flexShrink: 0
    },
    quoteMark: {
        fontSize: '6rem',
        color: '#f3f4f6',
        fontFamily: 'serif',
        position: 'absolute',
        top: '0rem',
        left: '1rem',
        zIndex: 0
    },
    clientImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '3px solid #16a34a',
        zIndex: 1
    },
    clientText: {
        fontSize: '0.95rem',
        color: '#4b5563',
        lineHeight: '1.6',
        fontStyle: 'italic',
        marginBottom: '1.5rem',
        zIndex: 1,
        position: 'relative'
    },
    clientName: {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#111',
        fontFamily: "'Playfair Display', serif",
        zIndex: 1
    },
    footer: {
      background: 'linear-gradient(135deg, #1f2937, #065f46)',
      color: '#ffffff',
      padding: '4rem 1.5rem'
    },
    footerInner: {
      maxWidth: '1280px',
      margin: '0 auto'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '3rem',
      marginBottom: '3rem'
    },
    footerTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      marginBottom: '1rem'
    },
    footerText: {
      color: '#d1d5db',
      marginBottom: '1.5rem',
      lineHeight: '1.75'
    },
    footerHeading: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      marginBottom: '1rem'
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.75rem',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    emailInput: {
      flex: 1,
      padding: '0.75rem 1rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '0.375rem 0 0 0.375rem',
      color: '#ffffff',
      outline: 'none'
    },
    submitButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0 0.375rem 0.375rem 0',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '0.875rem'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        
        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .product-card:hover img {
          transform: scale(1.1);
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(22, 163, 74, 0.1) !important;
        }

        .testimonial-track:hover {
            animation-play-state: paused !important;
        }

        .nav-link:hover {
          color: #16a34a;
        }
        
        .icon-button:hover {
          background-color: #f3f4f6;
        }
        
        .login-button:hover {
          background-color: #15803d;
          transform: scale(1.05);
        }
        
        .explore-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(34, 139, 34, 0.3);
        }
        
        .see-more-button:hover {
          background-color: #111;
          color: #ffffff;
          transform: scale(1.05);
        }
        
        .social-icon:hover {
          background-color: #16a34a;
          transform: scale(1.1);
        }
        
        .submit-button:hover {
          background-color: #15803d;
        }
        
        .footer-link:hover {
          color: #86efac;
        }
        
        .tab-button:hover {
            color: #111 !important;
        }
        
        .search-input:focus {
            border-color: #16a34a !important;
            background-color: #ffffff !important;
            box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .product-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 640px) {
          .product-grid-3, .product-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .section-title {
            font-size: 2rem !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flex: 1 }}>
            <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
            
            {/* Conditional Rendering: Show Input OR Nav Links */}
            {isSearchOpen ? (
                <div style={{flex: 1, maxWidth: '500px', animation: 'fadeInRight 0.3s ease'}}>
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        style={styles.searchInput}
                        className="search-input"
                        autoFocus
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            ) : (
                <div style={{ ...styles.navLinks, display: window.innerWidth >= 768 ? 'flex' : 'none' }}>
                  <button onClick={() => navigate('/')} style={styles.navLink} className="nav-link">HOME</button>
                  <button onClick={() => navigate('/shop')} style={styles.navLink} className="nav-link">SHOP</button>
                  <button onClick={() => navigate('/features')} style={styles.navLink} className="nav-link">FEATURES</button>
                  <button onClick={() => navigate('/contact')} style={styles.navLink} className="nav-link">CONTACT</button>
                </div>
            )}
          </div>

          <div style={styles.navIcons}>
            {/* Search Button Toggle */}
            <button style={styles.iconButton} className="icon-button" onClick={toggleSearch}>
              {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </button>
            
            <button style={styles.iconButton} className="icon-button" onClick={() => navigate('/cart')}>
              <ShoppingCartIcon />
            </button>
            <button style={styles.loginButton} className="login-button">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroInner} className="hero-grid">
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle} className="hero-title">
              Discover and<br />
              Find Your<br />
              <span style={styles.heroTitleGreen}>Own Fashion!</span>
            </h2>
            
            <p style={styles.heroText}>
              Explore our curated collection of elegant and stylish fashion pieces designed to make you stand out and feel confident.
            </p>
            
            <button style={styles.exploreButton} className="explore-button" onClick={handleExploreNow}>
              EXPLORE NOW
            </button>
          </div>

          <div style={styles.heroImageContainer}>
            <div style={styles.heroImageBox}>
              <img 
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop" 
                alt="Fashion Model"
                style={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section style={{ ...styles.section, background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
        <h2 style={styles.sectionTitle} className="section-title">Best selling</h2>
        <p style={styles.sectionSubtitle}>
          Get in on the trend with our curated selection of best-selling styles
        </p>

        <div style={styles.productGrid} className="product-grid-3">
          {bestSellingProducts.map((product) => (
            <div 
              key={product.id} 
              style={styles.productCard} 
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <div style={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={styles.productImage}
                />
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.productFooter}>
                  <span style={styles.productPrice}>${product.price}</span>
                  <div style={styles.ratingContainer}>
                    <div style={{ color: '#fbbf24' }}>
                      <StarIcon filled={true} />
                    </div>
                    <span style={styles.ratingText}>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.seeMoreButton} className="see-more-button" onClick={() => navigate('/shop')}>
          See more
        </button>
      </section>

      {/* Our Products Section - NOW FILTERED BY SEARCH */}
      <section style={styles.section} id="our-products">
        <h2 style={styles.sectionTitle} className="section-title">Our products</h2>
        
        {/* Dynamic Tab Buttons - Disable if searching */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '3rem 0', flexWrap: 'wrap', opacity: searchQuery ? 0.5 : 1 }}>
          {['SALE', 'HOT', 'NEW ARRIVALS', 'ACCESSORIES'].map((tab) => (
            <button 
              key={tab}
              onClick={() => { if(!searchQuery) setActiveTab(tab) }}
              className="tab-button"
              style={{ 
                fontSize: '0.875rem', 
                fontWeight: activeTab === tab ? '600' : '500', 
                color: activeTab === tab ? '#111' : '#6b7280', 
                border: 'none', 
                background: 'none',
                borderBottom: activeTab === tab ? '2px solid #111' : 'none', 
                paddingBottom: '0.5rem', 
                cursor: searchQuery ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Rendering filtered products */}
        {filteredProducts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="product-grid-4">
            {filteredProducts.map((product) => (
                <div 
                key={product.id} 
                style={{ ...styles.productCard, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} 
                className="product-card"
                onClick={() => handleProductClick(product)}
                >
                <div style={{ ...styles.productImageContainer, height: '256px' }}>
                    <img 
                    src={product.image} 
                    alt={product.name}
                    style={styles.productImage}
                    />
                </div>
                <div style={{ padding: '1rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111', marginBottom: '0.5rem' }}>{product.name}</h3>
                    <div style={styles.productFooter}>
                    <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111' }}>${product.price}</span>
                    <div style={styles.ratingContainer}>
                        <div style={{ color: '#fbbf24' }}>
                        <StarIcon filled={true} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{product.rating}</span>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>
                <p>No products found matching "{searchQuery || activeTab}".</p>
                {searchQuery && <button onClick={() => setSearchQuery('')} style={{marginTop: '1rem', color: '#16a34a', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold'}}>Clear Search</button>}
            </div>
        )}
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialSection}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ ...styles.sectionTitle, left: 'auto', transform: 'none', display: 'inline-block' }} className="section-title">What our Clients say!</h2>
             <div style={{ width: '60px', height: '4px', backgroundColor: '#16a34a', margin: '-0.5rem auto 0' }}></div>
        </div>

        <div style={{ overflow: 'hidden', width: '100%' }}>
            <div style={styles.testimonialContainer} className="testimonial-track">
                {clientTestimonials.map((item) => (
                    <div key={`orig-${item.id}`} style={styles.testimonialCard} className="testimonial-card">
                        <span style={styles.quoteMark}>“</span>
                        <img src={item.image} alt={item.name} style={styles.clientImage} />
                        <h4 style={styles.clientName}>{item.name}</h4>
                        <p style={{fontSize: '0.8rem', color: '#9ca3af', marginBottom: '1rem'}}>Happy Client</p>
                        <p style={styles.clientText}>
                             {item.text}
                        </p>
                    </div>
                ))}
                
                {clientTestimonials.map((item) => (
                    <div key={`dup-${item.id}`} style={styles.testimonialCard} className="testimonial-card">
                        <span style={styles.quoteMark}>“</span>
                        <img src={item.image} alt={item.name} style={styles.clientImage} />
                        <h4 style={styles.clientName}>{item.name}</h4>
                        <p style={{fontSize: '0.8rem', color: '#9ca3af', marginBottom: '1rem'}}>Happy Client</p>
                        <p style={styles.clientText}>
                             {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerGrid} className="footer-grid">
            <div>
              <h3 style={styles.footerTitle}>Ritso</h3>
              <p style={styles.footerText}>
                Your destination for elegant and timeless fashion pieces.
              </p>
              <div style={styles.socialIcons}>
                <div style={styles.socialIcon} className="social-icon">
                  <span>f</span>
                </div>
                <div style={styles.socialIcon} className="social-icon">
                  <span>t</span>
                </div>
                <div style={styles.socialIcon} className="social-icon">
                  <span>in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 style={styles.footerHeading}>SHOP</h4>
              <ul style={styles.footerLinks}>
                <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Products</span></li>
                <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Overview</span></li>
                <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Pricing</span></li>
                <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Releases</span></li>
              </ul>
            </div>

            <div>
              <h4 style={styles.footerHeading}>Company</h4>
              <ul style={styles.footerLinks}>
                <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">About us</span></li>
                <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">Contact</span></li>
                <li><span onClick={() => navigate('/')} style={styles.footerLink} className="footer-link">News</span></li>
                <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">Support</span></li>
              </ul>
            </div>

            <div>
              <h4 style={styles.footerHeading}>Stay up to date</h4>
              <div style={{ display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  style={styles.emailInput}
                />
                <button style={styles.submitButton} className="submit-button">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p style={styles.copyright}>
              © 2026 Ritso. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
              <span style={styles.footerLink} className="footer-link">Terms</span>
              <span style={styles.footerLink} className="footer-link">Privacy</span>
              <span style={styles.footerLink} className="footer-link">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionHomepage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // SVG Icons as components
// const ShoppingCartIcon = () => (
//   <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>
// );

// const SearchIcon = () => (
//   <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>
// );

// const StarIcon = ({ filled = true }) => (
//   <svg style={{ width: '20px', height: '20px' }} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//   </svg>
// );

// const ChevronLeftIcon = () => (
//   <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//   </svg>
// );

// const ChevronRightIcon = () => (
//   <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//   </svg>
// );

// const FashionHomepage = () => {
//   const navigate = useNavigate();
//   const [scrollY, setScrollY] = useState(0);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const bestSellingProducts = [
//     { id: 1, name: 'Bright Long Sleeve Top', price: 45.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', category: 'tops' },
//     { id: 2, name: 'Black Long Tailored Jacket', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop', category: 'jackets' },
//     { id: 3, name: 'Textured Cropped top', price: 34.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop', category: 'tops' }
//   ];

//   const products = [
//     { id: 4, name: 'Relaxed Casual Shirt', price: 52.00, rating: 4.5, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop', category: 'shirts' },
//     { id: 5, name: 'White Striped Button Top', price: 38.00, rating: 4.6, image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop', category: 'tops' },
//     { id: 6, name: 'Light Blue Tie Dye Shirt', price: 42.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=400&fit=crop', category: 'shirts' },
//     { id: 7, name: 'Grey Hooded Pullover', price: 54.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop', category: 'hoodies' },
//     { id: 8, name: 'Minimal Loose T-Shirt', price: 28.00, rating: 4.3, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop', category: 'tshirts' },
//     { id: 9, name: 'Oversized Blazer Shirt', price: 68.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop', category: 'blazers' },
//     { id: 10, name: 'Textured Jacket', price: 95.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=300&h=400&fit=crop', category: 'jackets' },
//     { id: 11, name: 'Solid Round Neck T-Shirt', price: 24.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=400&fit=crop', category: 'tshirts' }
//   ];

//   const designerClothes = [
//     { id: 12, name: 'Bold Print Kimono', price: 125.00, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=400&fit=crop', 
//       desc: 'Statement piece featuring vibrant botanical prints for confident style.', category: 'designer', rating: 4.9 },
//     { id: 13, name: 'Elegant Black Lace Top', price: 89.00, image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=300&h=400&fit=crop',
//       desc: 'Sophisticated lace detailing perfect for evening occasions.', category: 'designer', rating: 4.8 },
//     { id: 14, name: 'Modern Power Suit', price: 245.00, image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=300&h=400&fit=crop',
//       desc: 'Contemporary tailored ensemble for the modern professional.', category: 'suits', rating: 5.0 }
//   ];

//   const testimonials = [
//     { id: 1, name: 'Emily Johnson', text: 'I absolutely love the quality and style of the clothes from Ritso. The fit is perfect and the fabrics feel luxurious. Will definitely shop again!', rating: 5 },
//     { id: 2, name: 'Sarah Matthews', text: 'Outstanding customer service and incredible fashion pieces. Every item I ordered exceeded my expectations. The attention to detail is remarkable.', rating: 5 },
//     { id: 3, name: 'Maria Garcia', text: 'Finally found a fashion brand that understands elegance and comfort. The designs are timeless and the quality is unmatched. Highly recommend!', rating: 5 }
//   ];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleProductClick = (product) => {
//     navigate(`/product/${product.id}`, { state: { product } });
//   };

//   const handleExploreNow = () => {
//     navigate('/shop');
//   };

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       backgroundColor: '#ffffff',
//       fontFamily: "'Montserrat', sans-serif",
//       overflowX: 'hidden'
//     },
//     nav: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 1000,
//       backgroundColor: 'rgba(255, 255, 255, 0.95)',
//       backdropFilter: 'blur(12px)',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     },
//     navInner: {
//       maxWidth: '1280px',
//       margin: '0 auto',
//       padding: '0 1.5rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       height: '80px'
//     },
//     logo: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       fontFamily: "'Playfair Display', serif",
//       color: '#111',
//       margin: 0,
//       cursor: 'pointer'
//     },
//     navLinks: {
//       display: 'flex',
//       gap: '2rem',
//       listStyle: 'none',
//       margin: 0,
//       padding: 0
//     },
//     navLink: {
//       fontSize: '0.875rem',
//       fontWeight: '500',
//       color: '#374151',
//       textDecoration: 'none',
//       transition: 'color 0.3s',
//       cursor: 'pointer',
//       background: 'none',
//       border: 'none',
//       padding: 0
//     },
//     navIcons: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '1.5rem'
//     },
//     iconButton: {
//       padding: '0.5rem',
//       backgroundColor: 'transparent',
//       border: 'none',
//       borderRadius: '50%',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     loginButton: {
//       padding: '0.625rem 1.5rem',
//       backgroundColor: '#16a34a',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '0.375rem',
//       fontSize: '0.875rem',
//       fontWeight: '500',
//       cursor: 'pointer',
//       transition: 'all 0.3s',
//     },
//     heroSection: {
//       position: 'relative',
//       paddingTop: '8rem',
//       paddingBottom: '5rem',
//       padding: '8rem 1.5rem 5rem',
//       background: 'radial-gradient(circle at 20% 50%, rgba(144, 238, 144, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 139, 34, 0.1) 0%, transparent 50%)',
//       overflow: 'hidden'
//     },
//     heroInner: {
//       maxWidth: '1280px',
//       margin: '0 auto',
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '3rem',
//       alignItems: 'center'
//     },
//     heroContent: {
//       animation: 'fadeInLeft 0.8s ease-out forwards'
//     },
//     heroTitle: {
//       fontSize: '4.5rem',
//       fontWeight: 'bold',
//       fontFamily: "'Playfair Display', serif",
//       color: '#111',
//       lineHeight: '1.1',
//       marginBottom: '2rem'
//     },
//     heroTitleGreen: {
//       color: '#16a34a'
//     },
//     heroText: {
//       fontSize: '1.125rem',
//       color: '#4b5563',
//       lineHeight: '1.75',
//       marginBottom: '2rem',
//       maxWidth: '36rem'
//     },
//     exploreButton: {
//       padding: '1rem 2rem',
//       backgroundColor: '#111',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '0.375rem',
//       fontSize: '1.125rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s',
//       position: 'relative',
//       overflow: 'hidden'
//     },
//     heroImageContainer: {
//       position: 'relative',
//       animation: 'fadeInRight 0.8s ease-out 0.2s forwards',
//       opacity: 0
//     },
//     heroImageBox: {
//       position: 'relative',
//       background: 'linear-gradient(135deg, #90EE90, #C1FFC1)',
//       borderRadius: '1.5rem',
//       padding: '2rem',
//       boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
//     },
//     heroImage: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '1rem',
//       boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//     },
//     section: {
//       padding: '5rem 1.5rem',
//       maxWidth: '1280px',
//       margin: '0 auto'
//     },
//     sectionTitle: {
//       fontSize: '3rem',
//       fontWeight: 'bold',
//       fontFamily: "'Playfair Display', serif",
//       textAlign: 'center',
//       marginBottom: '1rem',
//       color: '#111',
//       position: 'relative',
//       display: 'inline-block',
//       left: '50%',
//       transform: 'translateX(-50%)'
//     },
//     sectionSubtitle: {
//       textAlign: 'center',
//       color: '#6b7280',
//       marginBottom: '4rem',
//       maxWidth: '42rem',
//       margin: '0 auto 4rem'
//     },
//     productGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '2rem',
//       marginBottom: '3rem'
//     },
//     productCard: {
//       backgroundColor: '#ffffff',
//       borderRadius: '1rem',
//       overflow: 'hidden',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//       transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//       cursor: 'pointer'
//     },
//     productImageContainer: {
//       overflow: 'hidden',
//       backgroundColor: '#f3f4f6',
//       height: '320px'
//     },
//     productImage: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       transition: 'transform 0.5s ease'
//     },
//     productInfo: {
//       padding: '1.5rem'
//     },
//     productName: {
//       fontSize: '1.25rem',
//       fontWeight: '600',
//       color: '#111',
//       marginBottom: '0.5rem'
//     },
//     productFooter: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between'
//     },
//     productPrice: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold',
//       color: '#16a34a'
//     },
//     ratingContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.25rem'
//     },
//     ratingText: {
//       color: '#374151',
//       fontWeight: '500'
//     },
//     seeMoreButton: {
//       padding: '0.75rem 2rem',
//       border: '2px solid #111',
//       backgroundColor: 'transparent',
//       color: '#111',
//       fontWeight: '600',
//       borderRadius: '0.375rem',
//       cursor: 'pointer',
//       transition: 'all 0.3s',
//       display: 'block',
//       margin: '0 auto'
//     },
//     footer: {
//       background: 'linear-gradient(135deg, #1f2937, #065f46)',
//       color: '#ffffff',
//       padding: '4rem 1.5rem'
//     },
//     footerInner: {
//       maxWidth: '1280px',
//       margin: '0 auto'
//     },
//     footerGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '3rem',
//       marginBottom: '3rem'
//     },
//     footerTitle: {
//       fontSize: '1.875rem',
//       fontWeight: 'bold',
//       fontFamily: "'Playfair Display', serif",
//       marginBottom: '1rem'
//     },
//     footerText: {
//       color: '#d1d5db',
//       marginBottom: '1.5rem',
//       lineHeight: '1.75'
//     },
//     footerHeading: {
//       fontSize: '1.125rem',
//       fontWeight: 'bold',
//       marginBottom: '1rem'
//     },
//     footerLinks: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0
//     },
//     footerLink: {
//       color: '#d1d5db',
//       textDecoration: 'none',
//       display: 'block',
//       marginBottom: '0.75rem',
//       transition: 'color 0.3s',
//       cursor: 'pointer'
//     },
//     socialIcons: {
//       display: 'flex',
//       gap: '1rem'
//     },
//     socialIcon: {
//       width: '40px',
//       height: '40px',
//       backgroundColor: 'rgba(255,255,255,0.1)',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       transition: 'all 0.3s'
//     },
//     emailInput: {
//       flex: 1,
//       padding: '0.75rem 1rem',
//       backgroundColor: 'rgba(255,255,255,0.1)',
//       border: '1px solid rgba(255,255,255,0.2)',
//       borderRadius: '0.375rem 0 0 0.375rem',
//       color: '#ffffff',
//       outline: 'none'
//     },
//     submitButton: {
//       padding: '0.75rem 1.5rem',
//       backgroundColor: '#16a34a',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '0 0.375rem 0.375rem 0',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s'
//     },
//     footerBottom: {
//       borderTop: '1px solid rgba(255,255,255,0.2)',
//       paddingTop: '2rem',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     },
//     copyright: {
//       color: '#9ca3af',
//       fontSize: '0.875rem'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(40px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
        
//         .product-card:hover {
//           transform: translateY(-12px);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//         }
        
//         .product-card:hover img {
//           transform: scale(1.1);
//         }
        
//         .nav-link:hover {
//           color: #16a34a;
//         }
        
//         .icon-button:hover {
//           background-color: #f3f4f6;
//         }
        
//         .login-button:hover {
//           background-color: #15803d;
//           transform: scale(1.05);
//         }
        
//         .explore-button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 15px 30px rgba(34, 139, 34, 0.3);
//         }
        
//         .see-more-button:hover {
//           background-color: #111;
//           color: #ffffff;
//           transform: scale(1.05);
//         }
        
//         .social-icon:hover {
//           background-color: #16a34a;
//           transform: scale(1.1);
//         }
        
//         .submit-button:hover {
//           background-color: #15803d;
//         }
        
//         .footer-link:hover {
//           color: #86efac;
//         }
        
//         @media (max-width: 1024px) {
//           .hero-grid {
//             grid-template-columns: 1fr !important;
//           }
//           .product-grid-3 {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//           .footer-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
        
//         @media (max-width: 640px) {
//           .product-grid-3, .product-grid-4 {
//             grid-template-columns: 1fr !important;
//           }
//           .footer-grid {
//             grid-template-columns: 1fr !important;
//           }
//           .hero-title {
//             font-size: 2.5rem !important;
//           }
//           .section-title {
//             font-size: 2rem !important;
//           }
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav style={styles.nav}>
//         <div style={styles.navInner}>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flex: 1 }}>
//             <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
            
//             <div style={{ ...styles.navLinks, display: window.innerWidth >= 768 ? 'flex' : 'none' }}>
//               <button onClick={() => navigate('/')} style={styles.navLink} className="nav-link">HOME</button>
//               <button onClick={() => navigate('/shop')} style={styles.navLink} className="nav-link">SHOP</button>
//               <button onClick={() => navigate('/features')} style={styles.navLink} className="nav-link">FEATURES</button>
//               <button onClick={() => navigate('/contact')} style={styles.navLink} className="nav-link">CONTACT</button>
//             </div>
//           </div>

//           <div style={styles.navIcons}>
//             <button style={styles.iconButton} className="icon-button">
//               <SearchIcon />
//             </button>
//             <button style={styles.iconButton} className="icon-button" onClick={() => navigate('/cart')}>
//               <ShoppingCartIcon />
//             </button>
//             <button style={styles.loginButton} className="login-button">
//               Login
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section style={styles.heroSection}>
//         <div style={styles.heroInner} className="hero-grid">
//           <div style={styles.heroContent}>
//             <h2 style={styles.heroTitle} className="hero-title">
//               Discover and<br />
//               Find Your<br />
//               <span style={styles.heroTitleGreen}>Own Fashion!</span>
//             </h2>
            
//             <p style={styles.heroText}>
//               Explore our curated collection of elegant and stylish fashion pieces designed to make you stand out and feel confident.
//             </p>
            
//             <button style={styles.exploreButton} className="explore-button" onClick={handleExploreNow}>
//               EXPLORE NOW
//             </button>
//           </div>

//           <div style={styles.heroImageContainer}>
//             <div style={styles.heroImageBox}>
//               <img 
//                 src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop" 
//                 alt="Fashion Model"
//                 style={styles.heroImage}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Best Selling Section */}
//       <section style={{ ...styles.section, background: 'linear-gradient(to bottom, #ffffff, #f9fafb)' }}>
//         <h2 style={styles.sectionTitle} className="section-title">Best selling</h2>
//         <p style={styles.sectionSubtitle}>
//           Get in on the trend with our curated selection of best-selling styles
//         </p>

//         <div style={styles.productGrid} className="product-grid-3">
//           {bestSellingProducts.map((product) => (
//             <div 
//               key={product.id} 
//               style={styles.productCard} 
//               className="product-card"
//               onClick={() => handleProductClick(product)}
//             >
//               <div style={styles.productImageContainer}>
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   style={styles.productImage}
//                 />
//               </div>
//               <div style={styles.productInfo}>
//                 <h3 style={styles.productName}>{product.name}</h3>
//                 <div style={styles.productFooter}>
//                   <span style={styles.productPrice}>${product.price}</span>
//                   <div style={styles.ratingContainer}>
//                     <div style={{ color: '#fbbf24' }}>
//                       <StarIcon filled={true} />
//                     </div>
//                     <span style={styles.ratingText}>{product.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button style={styles.seeMoreButton} className="see-more-button" onClick={() => navigate('/shop')}>
//           See more
//         </button>
//       </section>

//       {/* Our Products Section */}
//       <section style={styles.section}>
//         <h2 style={styles.sectionTitle} className="section-title">Our products</h2>
        
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '3rem 0' }}>
//           <button style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111', borderBottom: '2px solid #111', paddingBottom: '0.5rem', background: 'none', border: 'none', borderBottom: '2px solid #111', cursor: 'pointer' }}>SALE</button>
//           <button style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', background: 'none', border: 'none', paddingBottom: '0.5rem', cursor: 'pointer' }}>HOT</button>
//           <button style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', background: 'none', border: 'none', paddingBottom: '0.5rem', cursor: 'pointer' }}>NEW ARRIVALS</button>
//           <button style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', background: 'none', border: 'none', paddingBottom: '0.5rem', cursor: 'pointer' }}>ACCESSORIES</button>
//         </div>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="product-grid-4">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               style={{ ...styles.productCard, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} 
//               className="product-card"
//               onClick={() => handleProductClick(product)}
//             >
//               <div style={{ ...styles.productImageContainer, height: '256px' }}>
//                 <img 
//                   src={product.image} 
//                   alt={product.name}
//                   style={styles.productImage}
//                 />
//               </div>
//               <div style={{ padding: '1rem' }}>
//                 <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111', marginBottom: '0.5rem' }}>{product.name}</h3>
//                 <div style={styles.productFooter}>
//                   <span style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111' }}>${product.price}</span>
//                   <div style={styles.ratingContainer}>
//                     <div style={{ color: '#fbbf24' }}>
//                       <StarIcon filled={true} />
//                     </div>
//                     <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{product.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         <div style={styles.footerInner}>
//           <div style={styles.footerGrid} className="footer-grid">
//             <div>
//               <h3 style={styles.footerTitle}>Ritso</h3>
//               <p style={styles.footerText}>
//                 Your destination for elegant and timeless fashion pieces.
//               </p>
//               <div style={styles.socialIcons}>
//                 <div style={styles.socialIcon} className="social-icon">
//                   <span>f</span>
//                 </div>
//                 <div style={styles.socialIcon} className="social-icon">
//                   <span>t</span>
//                 </div>
//                 <div style={styles.socialIcon} className="social-icon">
//                   <span>in</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 style={styles.footerHeading}>SHOP</h4>
//               <ul style={styles.footerLinks}>
//                 <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Products</span></li>
//                 <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Overview</span></li>
//                 <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Pricing</span></li>
//                 <li><span onClick={() => navigate('/shop')} style={styles.footerLink} className="footer-link">Releases</span></li>
//               </ul>
//             </div>

//             <div>
//               <h4 style={styles.footerHeading}>Company</h4>
//               <ul style={styles.footerLinks}>
//                 <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">About us</span></li>
//                 <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">Contact</span></li>
//                 <li><span onClick={() => navigate('/')} style={styles.footerLink} className="footer-link">News</span></li>
//                 <li><span onClick={() => navigate('/contact')} style={styles.footerLink} className="footer-link">Support</span></li>
//               </ul>
//             </div>

//             <div>
//               <h4 style={styles.footerHeading}>Stay up to date</h4>
//               <div style={{ display: 'flex' }}>
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email"
//                   style={styles.emailInput}
//                 />
//                 <button style={styles.submitButton} className="submit-button">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div style={styles.footerBottom}>
//             <p style={styles.copyright}>
//               © 2026 Ritso. All rights reserved.
//             </p>
//             <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
//               <span style={styles.footerLink} className="footer-link">Terms</span>
//               <span style={styles.footerLink} className="footer-link">Privacy</span>
//               <span style={styles.footerLink} className="footer-link">Cookies</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FashionHomepage;