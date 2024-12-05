// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // Utilisation pour le routage interne

const Navbar = () => {
  return (
    <nav>
      <div id="home">
        <div className="profile_name">
          <img src="/NewPortfolio/assets/img1.jpg" className="Pimage" alt="Profile" />
        </div>
        <div className="profile_name">
          Jedidi Salma

          <div className="contact_info">
            <img src="/NewPortfolios/assets/envelope.png" alt="Envelope icon" />
            salma.jedidi@esprit.tn
          </div>
          <div style={{ clear: "both" }}></div>
          <div className="contact_info">
            <img src="/NewPortfolios//assetsphone.png" alt="Phone icon" />
            +21623777108
          </div>
        </div>
        <div className="topdiv">
          <Link className="topmenu" to="/">Accueil</Link>
          <img src="/NewPortfolios/EN.png" className="flag-icon" alt="English" />
          <Link className="topmenu" to="/en">EN</Link>
          <a className="topmenu">|</a>
          <img src="/NewPortfolios/FR.png" className="flag-icon" alt="French" />
          <Link className="topmenu" to="/fr">FR</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
