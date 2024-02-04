"use client";

import { Avatar, Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import me from "./images/me.jpeg";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-2 border-gray-300 rounded-full m-6 px-2 py-1 md:hidden">
      <Container>
        <Flex justify="between" gap="6" align="center" className="max-w-72">
          <Link href="/">
            <Image
              src={me}
              alt="profile image"
              className="rounded-full w-8 h-7 align-middle border-2 border-gray-300"
            />
          </Link>
          <Flex justify="between" align="center" width="100%">
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = () => {
  const [navLink, setNavLink] = useState("");
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const hash = window.location.hash;
    setNavLink(hash);
  }, []);

  return (
    <ul className="flex justify-between w-full gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "!text-slate-900 text-sm font-semibold": true,
              "!text-slate-950": link.href === navLink,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
