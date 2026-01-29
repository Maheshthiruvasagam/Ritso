import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shippingMethod, setShippingMethod] = useState('store');

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].totalPrice = (updatedCart[index].price * newQuantity).toFixed(2);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0);
  const shippingCost = shippingMethod === 'store' ? 0 : 9.00;
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
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
    continueButton: {
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
    mainContent: {
      paddingTop: '100px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 2rem 4rem'
    },
    header: {
      marginBottom: '3rem'
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: "'Playfair Display', serif",
      color: '#111',
      marginBottom: '0.5rem'
    },
    emptyCart: {
      textAlign: 'center',
      padding: '4rem 2rem',
      backgroundColor: '#ffffff',
      borderRadius: '1.5rem',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
    },
    emptyIcon: {
      fontSize: '5rem',
      marginBottom: '1.5rem'
    },
    emptyText: {
      fontSize: '1.5rem',
      color: '#6b7280',
      marginBottom: '2rem'
    },
    shopButton: {
      padding: '1rem 2.5rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    cartContent: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '2rem'
    },
    cartItems: {
      backgroundColor: '#ffffff',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
    },
    tableHeader: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 0.5fr',
      gap: '1rem',
      paddingBottom: '1.5rem',
      borderBottom: '2px solid #e5e7eb',
      marginBottom: '1.5rem'
    },
    headerCell: {
      fontSize: '0.75rem',
      fontWeight: '700',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    cartItem: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 0.5fr',
      gap: '1rem',
      alignItems: 'center',
      padding: '1.5rem 0',
      borderBottom: '1px solid #e5e7eb'
    },
    productInfo: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center'
    },
    productImage: {
      width: '80px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '0.75rem',
      backgroundColor: '#f3f4f6'
    },
    productDetails: {
      flex: 1
    },
    productName: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#111',
      marginBottom: '0.25rem'
    },
    productMeta: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.25rem'
    },
    priceCell: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#111'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      width: 'fit-content'
    },
    quantityButton: {
      width: '32px',
      height: '32px',
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    quantityValue: {
      fontSize: '1rem',
      fontWeight: '600',
      minWidth: '30px',
      textAlign: 'center'
    },
    totalCell: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#16a34a'
    },
    removeButton: {
      width: '36px',
      height: '36px',
      border: 'none',
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      borderRadius: '0.5rem',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sidebar: {
      position: 'sticky',
      top: '100px'
    },
    summaryCard: {
      backgroundColor: '#ffffff',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
      marginBottom: '1.5rem'
    },
    summaryTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111',
      marginBottom: '1.5rem'
    },
    shippingSection: {
      marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid #e5e7eb'
    },
    shippingLabel: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#111',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '1rem'
    },
    shippingOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '0.75rem',
      marginBottom: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    shippingOptionActive: {
      border: '2px solid #16a34a',
      backgroundColor: '#f0fdf4'
    },
    radio: {
      width: '20px',
      height: '20px',
      cursor: 'pointer'
    },
    shippingInfo: {
      flex: 1
    },
    shippingName: {
      fontSize: '0.9375rem',
      fontWeight: '600',
      color: '#111',
      marginBottom: '0.125rem'
    },
    shippingTime: {
      fontSize: '0.8125rem',
      color: '#6b7280'
    },
    shippingPrice: {
      fontSize: '1rem',
      fontWeight: '700',
      color: '#111'
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    summaryLabel: {
      fontSize: '0.9375rem',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontSize: '0.8125rem',
      fontWeight: '500'
    },
    summaryValue: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#111'
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '1.5rem',
      borderTop: '2px solid #e5e7eb',
      marginTop: '1rem'
    },
    totalLabel: {
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#111',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    totalValue: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#16a34a',
      fontFamily: "'Playfair Display', serif"
    },
    checkoutButton: {
      width: '100%',
      padding: '1.25rem',
      backgroundColor: '#16a34a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.75rem',
      fontSize: '1.125rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginTop: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      boxShadow: '0 10px 30px rgba(22, 163, 74, 0.3)'
    }
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.container}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
          
          .shop-button:hover {
            background-color: #15803d;
            transform: scale(1.05);
          }
        `}</style>

        <nav style={styles.nav}>
          <div style={styles.navInner}>
            <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          </div>
        </nav>

        <div style={styles.mainContent}>
          <div style={styles.emptyCart}>
            <div style={styles.emptyIcon}>🛒</div>
            <h2 style={styles.emptyText}>Your cart is empty</h2>
            <button 
              style={styles.shopButton}
              className="shop-button"
              onClick={() => navigate('/shop')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .continue-button:hover {
          border-color: #16a34a;
          color: #16a34a;
        }
        
        .quantity-button:hover {
          background-color: #f0fdf4;
          color: #16a34a;
        }
        
        .remove-button:hover {
          background-color: #dc2626;
          color: #ffffff;
        }
        
        .shipping-option:hover {
          border-color: #16a34a;
        }
        
        .checkout-button:hover {
          background-color: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(22, 163, 74, 0.4);
        }
        
        @media (max-width: 1024px) {
          .cart-content {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <h1 style={styles.logo} onClick={() => navigate('/')}>Ritso</h1>
          <button 
            onClick={() => navigate('/shop')} 
            style={styles.continueButton}
            className="continue-button"
          >
            ← Continue shopping
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.header}>
          <h1 style={styles.title}>My Cart</h1>
        </div>

        <div style={styles.cartContent} className="cart-content">
          {/* Cart Items */}
          <div style={styles.cartItems}>
            <div style={styles.tableHeader}>
              <div style={styles.headerCell}>Product</div>
              <div style={styles.headerCell}>Price</div>
              <div style={styles.headerCell}>Qty</div>
              <div style={styles.headerCell}>Total</div>
              <div style={styles.headerCell}></div>
            </div>

            {cartItems.map((item, index) => (
              <div key={index} style={styles.cartItem}>
                <div style={styles.productInfo}>
                  <img 
                    src={item.image}
                    alt={item.name}
                    style={styles.productImage}
                  />
                  <div style={styles.productDetails}>
                    <div style={styles.productName}>{item.name}</div>
                    <div style={styles.productMeta}>
                      Size: {item.selectedSize} / Color: {item.selectedColor}
                    </div>
                    <div style={styles.productMeta}>ID: #{item.id}{Math.floor(Math.random() * 1000000)}</div>
                  </div>
                </div>

                <div style={styles.priceCell}>${item.price}</div>

                <div style={styles.quantityControls}>
                  <button 
                    style={styles.quantityButton}
                    className="quantity-button"
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                  >
                    −
                  </button>
                  <div style={styles.quantityValue}>{item.quantity}</div>
                  <button 
                    style={styles.quantityButton}
                    className="quantity-button"
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div style={styles.totalCell}>${item.totalPrice}</div>

                <button 
                  style={styles.removeButton}
                  className="remove-button"
                  onClick={() => removeItem(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div style={styles.sidebar}>
            <div style={styles.summaryCard}>
              {/* Shipping Options */}
              <div style={styles.shippingSection}>
                <div style={styles.shippingLabel}>Choose shipping mode:</div>
                
                <div 
                  style={{
                    ...styles.shippingOption,
                    ...(shippingMethod === 'store' ? styles.shippingOptionActive : {})
                  }}
                  className="shipping-option"
                  onClick={() => setShippingMethod('store')}
                >
                  <input 
                    type="radio" 
                    name="shipping"
                    checked={shippingMethod === 'store'}
                    onChange={() => setShippingMethod('store')}
                    style={styles.radio}
                  />
                  <div style={styles.shippingInfo}>
                    <div style={styles.shippingName}>Store pickup (1-20 min)</div>
                    <div style={styles.shippingTime}>At All Glenridge Ave, Brooklyn, NY 11201</div>
                  </div>
                  <div style={styles.shippingPrice}>FREE</div>
                </div>

                <div 
                  style={{
                    ...styles.shippingOption,
                    ...(shippingMethod === 'delivery' ? styles.shippingOptionActive : {})
                  }}
                  className="shipping-option"
                  onClick={() => setShippingMethod('delivery')}
                >
                  <input 
                    type="radio" 
                    name="shipping"
                    checked={shippingMethod === 'delivery'}
                    onChange={() => setShippingMethod('delivery')}
                    style={styles.radio}
                  />
                  <div style={styles.shippingInfo}>
                    <div style={styles.shippingName}>Delivery at home (3-4 day)</div>
                  </div>
                  <div style={styles.shippingPrice}>9.00€</div>
                </div>
              </div>

              {/* Summary */}
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Subtotal</span>
                <span style={styles.summaryValue}>${subtotal.toFixed(2)}</span>
              </div>

              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Shipping</span>
                <span style={styles.summaryValue}>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
              </div>

              <div style={styles.totalRow}>
                <span style={styles.totalLabel}>Total</span>
                <span style={styles.totalValue}>${total.toFixed(2)}</span>
              </div>

              <button 
                style={styles.checkoutButton}
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;