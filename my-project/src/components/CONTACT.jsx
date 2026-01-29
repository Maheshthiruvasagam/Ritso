import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple SVG Icons
const Icons = {
  MapPin: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Phone: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Mail: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Globe: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Truck: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>,
  Box: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
  Support: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
  Shield: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  CreditCard: () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#FDFBF7', // Beige tone from image
      fontFamily: "'Montserrat', sans-serif",
      color: '#333'
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
    hero: {
      height: '60vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      marginTop: '80px',
      position: 'relative'
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.3)'
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out'
    },
    heroTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '4.5rem',
      fontWeight: '400',
      marginBottom: '1rem'
    },
    heroBreadcrumb: {
        fontSize: '0.9rem',
        opacity: 0.9,
        letterSpacing: '2px'
    },
    mainSection: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '6rem 1.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      animation: 'fadeInUp 1s ease-out 0.3s backwards'
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.2rem',
      marginBottom: '1rem',
      color: '#222'
    },
    subText: {
      color: '#666',
      lineHeight: '1.8',
      fontSize: '0.95rem',
      marginBottom: '3rem'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2.5rem'
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    infoIconWrapper: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem',
      color: '#16a34a'
    },
    infoLabel: {
      fontWeight: '700',
      fontSize: '1rem',
      color: '#111'
    },
    infoValue: {
      color: '#555',
      fontSize: '0.9rem',
      lineHeight: '1.6'
    },
    formBox: {
      backgroundColor: '#f3eee8', // Slightly darker beige for form
      padding: '3rem',
      borderRadius: '4px'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '1.5rem'
    },
    input: {
      width: '100%',
      padding: '1rem',
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      borderRadius: '0',
      fontSize: '0.9rem',
      outline: 'none',
      fontFamily: "'Montserrat', sans-serif"
    },
    textarea: {
      width: '100%',
      padding: '1rem',
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      borderRadius: '0',
      fontSize: '0.9rem',
      outline: 'none',
      minHeight: '120px',
      fontFamily: "'Montserrat', sans-serif",
      resize: 'vertical',
      marginBottom: '2rem'
    },
    button: {
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '1rem 2.5rem',
      border: 'none',
      fontSize: '0.8rem',
      fontWeight: '600',
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    appSection: {
        position: 'relative',
        padding: '6rem 1.5rem',
        backgroundImage: 'url("https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        color: 'white'
    },
    appOverlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    appContent: {
        position: 'relative',
        zIndex: 2,
        maxWidth: '700px',
        margin: '0 auto'
    },
    appTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '2.5rem',
        marginBottom: '1.5rem'
    },
    appButtons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem'
    },
    appBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: '#111',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '0.8rem 1.5rem',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '0.9rem'
    },
    featuresSection: {
        backgroundColor: '#FDFBF7',
        padding: '4rem 1.5rem',
        borderBottom: '1px solid #eee'
    },
    featuresGrid: {
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '2rem',
        textAlign: 'center'
    },
    featureIcon: {
        color: '#333',
        marginBottom: '1rem',
        display: 'inline-block'
    },
    featureTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '1rem',
        marginBottom: '0.5rem'
    },
    featureDesc: {
        fontSize: '0.75rem',
        color: '#777',
        lineHeight: '1.4'
    },
    mapSection: {
        width: '100%',
        height: '400px',
        backgroundColor: '#eee',
        backgroundImage: 'url("https://help.openstreetmap.org/upfiles/osm_help_logo_6.png")', // Placeholder map texture
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden'
    },
    // Adding a real-looking static map overlay effect
    mapImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.8
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-link:hover { color: #16a34a !important; }
        .submit-btn:hover { background-color: #16a34a !important; }
        .form-input:focus { border-color: #111 !important; }
        .app-btn:hover { background-color: #333 !important; }
        
        @media (max-width: 900px) {
            .main-section { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .hero-title { font-size: 3rem !important; }
        }
        @media (max-width: 600px) {
            .form-row { grid-template-columns: 1fr !important; gap: 0 !important; }
            .features-grid { grid-template-columns: 1fr !important; }
            .app-buttons { flex-direction: column; }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          <div style={styles.navLinks} className="desktop-only">
            <button onClick={() => navigate('/')} style={styles.navLink} className="nav-link">HOME</button>
            <button onClick={() => navigate('/shop')} style={styles.navLink} className="nav-link">SHOP</button>
            <button onClick={() => navigate('/features')} style={styles.navLink} className="nav-link">FEATURES</button>
            <button onClick={() => navigate('/contact')} style={{...styles.navLink, fontWeight: '700'}} className="nav-link">CONTACT</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">Contact Us</h1>
            <p style={styles.heroBreadcrumb}>Home / Contact Us</p>
        </div>
      </div>

      {/* Main Content: Split Layout */}
      <div style={styles.mainSection} className="main-section">
        {/* Left Column: Info */}
        <div>
            <div style={{marginBottom: '3rem'}}>
                 <div style={{color: '#333', marginBottom: '0.5rem'}}><Icons.Globe /></div>
                 <h2 style={styles.sectionTitle}>Speak With Us</h2>
                 <p style={styles.subText}>
                    Have a question? We are here to help. Send us a message or contact us directly using the info below.
                 </p>
            </div>

            <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                    <div style={styles.infoIconWrapper}><Icons.MapPin /></div>
                    <div style={styles.infoLabel}>Store Address</div>
                    <div style={styles.infoValue}>No. 58 A, East Madison Street,<br/>Baltimore, MD, USA 4508</div>
                </div>
                <div style={styles.infoItem}>
                    <div style={styles.infoIconWrapper}><Icons.Phone /></div>
                    <div style={styles.infoLabel}>Call Us</div>
                    <div style={styles.infoValue}>000-123-456789<br/>000-987-654321</div>
                </div>
                <div style={styles.infoItem}>
                    <div style={styles.infoIconWrapper}><Icons.Mail /></div>
                    <div style={styles.infoLabel}>Mail Us</div>
                    <div style={styles.infoValue}>info@example.com<br/>support@ritso.com</div>
                </div>
                <div style={styles.infoItem}>
                    <div style={styles.infoIconWrapper}><Icons.Globe /></div>
                    <div style={styles.infoLabel}>Website</div>
                    <div style={styles.infoValue}>www.ritso-shop.com</div>
                </div>
            </div>

            <div style={{marginTop: '4rem', display: 'flex', gap: '2rem', opacity: 0.6}}>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif'}}>hnix</span>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif'}}>modanisa</span>
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif'}}>ESPRIT</span>
            </div>
        </div>

        {/* Right Column: Form */}
        <div style={styles.formBox}>
            <div style={{marginBottom: '2rem'}}>
                 <div style={{color: '#333', marginBottom: '0.5rem'}}><Icons.Support /></div>
                 <h2 style={styles.sectionTitle}>24/7 Support</h2>
                 <p style={{...styles.subText, marginBottom: '1rem'}}>
                    Fill out the form below and we will get back to you within 24 hours.
                 </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div style={styles.formRow} className="form-row">
                    <input type="text" name="firstName" placeholder="First name" style={styles.input} className="form-input" onChange={handleChange} value={formData.firstName} required />
                    <input type="text" name="lastName" placeholder="Last name" style={styles.input} className="form-input" onChange={handleChange} value={formData.lastName} required />
                </div>
                <div style={styles.formRow} className="form-row">
                    <input type="email" name="email" placeholder="Email here" style={styles.input} className="form-input" onChange={handleChange} value={formData.email} required />
                    <input type="tel" name="phone" placeholder="Phone number" style={styles.input} className="form-input" onChange={handleChange} value={formData.phone} />
                </div>
                <textarea name="message" placeholder="Additional message" style={styles.textarea} className="form-input" onChange={handleChange} value={formData.message} required></textarea>
                
                <button type="submit" style={styles.button} className="submit-btn">Send Message</button>
            </form>
        </div>
      </div>

      {/* App Download Section */}
      <div style={styles.appSection}>
        <div style={styles.appOverlay}></div>
        <div style={styles.appContent}>
            <div style={{marginBottom: '1rem'}}><Icons.Box /></div>
            <h2 style={styles.appTitle}>Download Our Store App To Make Shopping Easier.</h2>
            <p style={{opacity: 0.9, lineHeight: 1.6}}>
                Get access to exclusive offers, track your orders in real-time, and enjoy a seamless shopping experience.
            </p>
            <div style={styles.appButtons} className="app-buttons">
                <button style={styles.appBtn} className="app-btn">
                    <span>Google Play</span>
                </button>
                <button style={styles.appBtn} className="app-btn">
                    <span>App Store</span>
                </button>
            </div>
        </div>
      </div>

      {/* Features Strip */}
      <div style={styles.featuresSection}>
        <div style={styles.featuresGrid} className="features-grid">
            <div>
                <span style={styles.featureIcon}><Icons.Truck /></span>
                <h4 style={styles.featureTitle}>Timely Delivery</h4>
                <p style={styles.featureDesc}>We ensure your package arrives on time.</p>
            </div>
            <div>
                <span style={styles.featureIcon}><Icons.Box /></span>
                <h4 style={styles.featureTitle}>Free Shipping</h4>
                <p style={styles.featureDesc}>On all orders over $100 within the country.</p>
            </div>
            <div>
                <span style={styles.featureIcon}><Icons.Support /></span>
                <h4 style={styles.featureTitle}>24/7 Support</h4>
                <p style={styles.featureDesc}>Our team is ready to help you anytime.</p>
            </div>
            <div>
                <span style={styles.featureIcon}><Icons.Shield /></span>
                <h4 style={styles.featureTitle}>Secured Payment</h4>
                <p style={styles.featureDesc}>100% secured payment processing.</p>
            </div>
            <div>
                <span style={styles.featureIcon}><Icons.CreditCard /></span>
                <h4 style={styles.featureTitle}>Safe Check Out</h4>
                <p style={styles.featureDesc}>Easy and safe checkout process.</p>
            </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={styles.mapSection}>
        <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
            alt="Map Location" 
            style={styles.mapImage} 
        />
        <div style={{
            position: 'absolute', 
            top: '50%', left: '50%', 
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '30px',
            fontWeight: 'bold',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
        }}>
            📍 Ritso HQ
        </div>
      </div>

    </div>
  );
};

export default ContactPage;