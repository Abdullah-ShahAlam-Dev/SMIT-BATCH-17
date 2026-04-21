// =============================================
//  NAVBAR - Dark Professional
// =============================================

function Navbar() {
  return (
    <nav>
      <div className="logo">
        Abdullah<span>Dev</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="Btns">
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
