// =============================================
//  FOOTER - Dark Professional
// =============================================

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-brand">Abdulah<span>Dev</span></p>
        <p className="footer-copy">© {new Date().getFullYear()} AbdullahDev. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
