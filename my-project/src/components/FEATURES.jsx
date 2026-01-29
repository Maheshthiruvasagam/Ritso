import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // UPDATED: Fixed the first image URL
  const features = [
    {
      title: 'Premium Quality',
      description: 'We source the finest silk, cotton, and linen to ensure every piece feels as good as it looks.',
      // New reliable image for fabric/quality
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Sustainable',
      description: 'Committed to eco-friendly practices, using recycled materials and ethical manufacturing.',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Personal Styling',
      description: 'Get expert advice from our professional stylists to curate your perfect seasonal wardrobe.',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Express Delivery',
      description: 'Fast, reliable worldwide shipping ensures your new look arrives exactly when you need it.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: "'Montserrat', sans-serif",
      color: '#333',
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
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      height: '80px',
      display: 'flex',
      alignItems: 'center'
    },
    navInner: {
      width: '100%',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      cursor: 'pointer',
      margin: 0
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem'
    },
    navLink: {
      fontSize: '0.85rem',
      fontWeight: '500',
      color: '#333',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      letterSpacing: '1px',
      transition: 'color 0.3s'
    },
    // HERO SECTION (Split Layout)
    heroSection: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '160px 1.5rem 80px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    imageCollage: {
      position: 'relative',
      height: '550px',
      width: '100%'
    },
    mainImg: {
      width: '80%',
      height: '90%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: '4px',
      boxShadow: '20px 20px 0px rgba(240, 240, 240, 1)'
    },
    accentImg: {
      width: '50%',
      height: '50%',
      objectFit: 'cover',
      position: 'absolute',
      bottom: '20px',
      right: '10px',
      border: '8px solid #fff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
      animation: 'float 6s ease-in-out infinite'
    },
    heroContent: {
      paddingLeft: '2rem'
    },
    smallLabel: {
      fontSize: '0.8rem',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      color: '#16a34a',
      fontWeight: '700',
      marginBottom: '1rem',
      display: 'block'
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3.5rem',
      lineHeight: '1.2',
      marginBottom: '1.5rem',
      color: '#111'
    },
    heroDesc: {
      fontSize: '1rem',
      lineHeight: '1.8',
      color: '#666',
      marginBottom: '2rem'
    },
    subFeature: {
        marginBottom: '1.5rem'
    },
    subFeatureTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.2rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
        color: '#222'
    },
    discoverBtn: {
        padding: '1rem 2.5rem',
        backgroundColor: '#16a34a',
        color: '#fff',
        border: 'none',
        fontSize: '0.85rem',
        letterSpacing: '1px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        marginTop: '1rem'
    },
    // STATS SECTION
    statsSection: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        maxWidth: '1000px',
        margin: '0 auto 6rem',
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0'
    },
    statNumber: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#16a34a', // Green Accent
        fontFamily: "'Playfair Display', serif",
        marginBottom: '0.5rem'
    },
    statLabel: {
        fontSize: '0.9rem',
        color: '#555',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    // MIDDLE BANNER
    bannerSection: {
        position: 'relative',
        height: '450px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=2532&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '6rem'
    },
    bannerOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    bannerContent: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        padding: '0 1rem'
    },
    // GRID SECTION
    gridHeader: {
        textAlign: 'center',
        marginBottom: '4rem'
    },
    gridTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '2.5rem',
        color: '#111',
        marginBottom: '1rem'
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        maxWidth: '1280px',
        margin: '0 auto 6rem',
        padding: '0 1.5rem'
    },
    featureCard: {
        backgroundColor: '#fff',
        transition: 'transform 0.4s ease',
        cursor: 'pointer',
        textAlign: 'center'
    },
    cardImageContainer: {
        height: '350px',
        width: '100%',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        position: 'relative'
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    },
    cardTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.25rem',
        fontWeight: '700',
        marginBottom: '0.5rem'
    },
    cardDesc: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.6',
        padding: '0 1rem'
    },
    // LOGO STRIP
    logoStrip: {
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        padding: '4rem 0',
        borderTop: '1px solid #eee',
        opacity: 0.5
    },
    brandLogo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#333'
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
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }

        .nav-link:hover { color: #16a34a !important; }
        .feature-card:hover { transform: translateY(-10px); }
        .feature-card:hover img { transform: scale(1.1); }
        .discover-btn:hover { background-color: #111 !important; }

        @media (max-width: 1024px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 3rem; }
            .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .image-collage { height: 400px !important; }
            .stats-section { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem; }
        }
        @media (max-width: 600px) {
            .features-grid { grid-template-columns: 1fr !important; }
            .logo-strip { flex-direction: column; align-items: center; gap: 2rem; }
            .hero-title { font-size: 2.5rem !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          <div style={styles.navLinks} className="desktop-only">
            <button onClick={() => navigate('/')} style={styles.navLink} className="nav-link">HOME</button>
            <button onClick={() => navigate('/shop')} style={styles.navLink} className="nav-link">SHOP</button>
            <button onClick={() => navigate('/features')} style={{...styles.navLink, fontWeight: '700', color: '#16a34a'}} className="nav-link">FEATURES</button>
            <button onClick={() => navigate('/contact')} style={styles.navLink} className="nav-link">CONTACT</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Split Layout like "About Us" Reference */}
      <div style={styles.heroSection} className="hero-grid">
        <div style={styles.imageCollage} className="image-collage">
            <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
                alt="Fashion Model" 
                style={styles.mainImg} 
            />
            <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop" 
                alt="Details" 
                style={styles.accentImg} 
            />
        </div>

        <div style={styles.heroContent} className="fade-in-up">
            <span style={styles.smallLabel}>Who We Are</span>
            <h1 style={styles.heroTitle}>Fashion is about passion, not just clothes.</h1>
            <p style={styles.heroDesc}>
                Interdum scelerisque urna libero vulputate diam tristique pulvinar amet. 
                Consequat pede hac tempor dapibus risus gravida adipiscing purus.
            </p>

            <div style={styles.subFeature}>
                <h3 style={styles.subFeatureTitle}>Personalized Design</h3>
                <p style={{color: '#666', fontSize: '0.9rem'}}>Sagittis ipsum erat porta tempus consequat felis ante. Habitant class venenatis metus.</p>
            </div>
            
            <div style={styles.subFeature}>
                <h3 style={styles.subFeatureTitle}>Fashion Trendsetter</h3>
                <p style={{color: '#666', fontSize: '0.9rem'}}>Imperdiet nullam porta commodo donec consequat felis ante habitant class.</p>
            </div>

            <button style={styles.discoverBtn} className="discover-btn" onClick={() => navigate('/shop')}>
                DISCOVER MORE
            </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div style={styles.statsSection} className="stats-section">
        <div>
            <div style={styles.statNumber}>1.4K+</div>
            <div style={styles.statLabel}>Products Sold</div>
        </div>
        <div>
            <div style={styles.statNumber}>720+</div>
            <div style={styles.statLabel}>Projects Done</div>
        </div>
        <div>
            <div style={styles.statNumber}>899+</div>
            <div style={styles.statLabel}>Happy Clients</div>
        </div>
        <div>
            <div style={styles.statNumber}>15+</div>
            <div style={styles.statLabel}>Years Experience</div>
        </div>
      </div>

      {/* MIDDLE BANNER - Immersive Image */}
      <div style={styles.bannerSection}>
        <div style={styles.bannerOverlay}></div>
        <div style={styles.bannerContent}>
            <span style={{display: 'block', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem'}}>Get Started</span>
            <h2 style={{fontFamily: "'Playfair Display', serif", fontSize: '3rem', marginBottom: '2rem'}}>
                Do styling your fashion with our best-personalized designs
            </h2>
            <button style={{...styles.discoverBtn, border: '1px solid white', backgroundColor: 'transparent'}} className="discover-btn" onClick={() => navigate('/shop')}>
                DISCOVER MORE
            </button>
        </div>
      </div>

      {/* FEATURES GRID - Replacing "Team" with Features */}
      <div>
          <div style={styles.gridHeader}>
              <span style={{color: '#16a34a', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px'}}>Our Core Values</span>
              <h2 style={styles.gridTitle}>We serve uniqueness because you<br/>are unique to us</h2>
              <div style={{width: '60px', height: '3px', backgroundColor: '#16a34a', margin: '1rem auto'}}></div>
          </div>

          <div style={styles.featuresGrid} className="features-grid">
              {features.map((feature, index) => (
                  <div key={index} style={styles.featureCard} className="feature-card">
                      <div style={styles.cardImageContainer}>
                          <img src={feature.image} alt={feature.title} style={styles.cardImage} />
                      </div>
                      <h3 style={styles.cardTitle}>{feature.title}</h3>
                      <p style={{fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px'}}>Ritso Standard</p>
                      <p style={styles.cardDesc}>{feature.description}</p>
                      {/* Social-style icons for decoration */}
                      <div style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '10px', opacity: 0.6}}>
                          <div style={{width: '8px', height: '8px', background: '#ccc', borderRadius: '50%'}}></div>
                          <div style={{width: '8px', height: '8px', background: '#ccc', borderRadius: '50%'}}></div>
                          <div style={{width: '8px', height: '8px', background: '#ccc', borderRadius: '50%'}}></div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* LOGO STRIP */}
      <div style={styles.logoStrip} className="logo-strip">
          <span style={styles.brandLogo}>RITSO</span>
          <span style={styles.brandLogo}>ritso</span>
          <span style={styles.brandLogo}>RITSO</span>
          <span style={styles.brandLogo}>ritso</span>
      </div>

    </div>
  );
};

export default FeaturesPage;