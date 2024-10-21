import React, { useState } from "react";

const Footer: React.FC = () => {
  //   const date = new Date();
  const [date, setDate] = useState(new Date());
  const lastYear = date.getFullYear() - 1;
  const currentYear = date.getFullYear();
  return (
    <footer className="footer-container border-top">
      <span>
        &copy;Copyright {lastYear}-{currentYear}
      </span>
    </footer>
  );
};

export default Footer;
