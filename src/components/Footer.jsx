import React from "react";

function Footer() {
  return (
    <footer className="bg-[#000000] text-white text-center py-4">
      &copy; {new Date().getFullYear()} JC Shoe Collections. All rights reserved.
    </footer>
  );
}

export default Footer;
