import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you.
        </p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>
      <hr />
      <div className="links">
        <p>Copyright &copy; 2026 Apple Inc. All rights reserved.</p>
        <ul>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
