import React from "react";
import PillNav from "../layout/PillNav";
import logo from "../../../public/placeholder.svg";

export default function PillNavbar() {
  return (
    <PillNav
      logo={logo.src}
      logoAlt="Company Logo"
      items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
  );
}
