import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <span className="copy">&copy; Copyright</span>
      <span className="social">
        Мы в соцсетях:
        <div className="icons">
          <span className="material-icons">facebook</span>
          {/* <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span> */}
        </div>
      </span>
      <span className="author">
        Сайт разработал и создал <br />
        <a href="/">SEICHUK SEMEN</a>
      </span>
    </footer>
  );
}

export default Footer;
