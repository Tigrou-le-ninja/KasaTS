import "./footer.scss";
import WhiteLogo from "../../assets/logo_white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={WhiteLogo} alt="Logo de Kasa" />
      <p>
        <span className="footer-text-1">© 2020 Kasa. All </span>
        <span>rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
