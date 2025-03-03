import Image from 'next/image'
import React, { useState } from 'react'
import bars from '@/public/assets/icons/bars-solid.svg';
import nameLogo from "@/public/assets/nameLogo/nameLogo.svg";
import { Link } from "react-scroll";

function Navbar() {
  const [activeLink, setActiveLink] = useState("aboutMe");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const navLinks = [
    { id: "aboutMe", label: "About me" },
    { id: "Projects", label: "Projects" },
    { id: "Education", label: "Education" },
    { id: "Skills", label: "Skills" },
    { id: "Contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between z-50 sticky top-5 w-full rounded-[100px] px-3 py-2">
      <Image src={nameLogo} className="cursor-pointer w-10" alt="Logo" />

      <div className={`navLinks ${isMobileMenuOpen ? "mobileView" : ""} flex`}>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
              activeLink === link.id ? "activeBtn" : ""
            }`}
            onClick={() => handleSetActive(link.id)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="humberger">
        <Image
          src={bars}
          className="w-6 cursor-pointer mr-3"
          onClick={toggleMobileMenu}
          alt="Menu"
        />
      </div>
    </nav>
  );
}

export default Navbar;