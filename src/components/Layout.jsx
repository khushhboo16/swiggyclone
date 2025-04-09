import React from "react";
import HeaderYes from "./HeaderYes"; // Ensure proper import
import Footer from "./Footer"; // Ensure proper import

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderYes />  {/* Always display header */}
      <main>{children}</main>  {/* Dynamically load page content */}
      <Footer />  {/* Always display footer */}
    </div>
  );
};

export default Layout;
