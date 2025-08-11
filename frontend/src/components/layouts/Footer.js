export default function Footer() {
  return (
    <footer className="mstore-footer">
      <div className="footer-content">
        {/* About */}
        <div className="footer-section about">
          <h3>M-Store</h3>
          <p>Your trusted store for mobile phones, electronics, and accessories.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@mstore.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 456 Market Street, Tech City</p>
          <div className="social-icons">
            <a href="https://facebook.com/mstore" target="_blank" rel="noreferrer" aria-label="Facebook">👍</a>
            <a href="https://twitter.com/mstore" target="_blank" rel="noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://instagram.com/mstore" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
            <a href="https://linkedin.com/company/mstore" target="_blank" rel="noreferrer" aria-label="LinkedIn">🔗</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for latest updates and exclusive offers.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 M-Store All Rights Reserved.</p>
      </div>
    </footer>
  );
}
