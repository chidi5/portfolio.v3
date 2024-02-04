"use client";

import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavLinks = () => {
  const [navLink, setNavLink] = useState("");
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    setNavLink(hash);
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-8 w-max">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="group flex items-center py-3 active"
              href={link.href}
              onClick={() => setNavLink(link.href)}
            >
              <span
                className={classnames({
                  "nav-links": true,
                  "!w-16 !text-slate-900": link.href === navLink,
                })}
              ></span>
              <span
                className={classnames({
                  "nav-text": true,
                  "!text-slate-900": link.href === navLink,
                })}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
