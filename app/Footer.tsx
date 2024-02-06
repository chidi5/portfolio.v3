import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Inspired by Brittany Chang, project coded in{" "}
        <Link
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-900 hover:text-indigo-300 focus-visible:text-indigo-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </Link>{" "}
        by yours truly. Built with{" "}
        <Link
          href="https://nextjs.org/"
          className="font-medium text-slate-900 hover:text-indigo-300 focus-visible:text-indigo-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com/"
          className="font-medium text-slate-900 hover:text-indigo-300 focus-visible:text-indigo-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com/"
          className="font-medium text-slate-900 hover:text-indigo-300 focus-visible:text-indigo-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </Link>
        . All text is set in the{" "}
        <Link
          href="https://rsms.me/montserrat/"
          className="font-medium text-slate-900 hover:text-indigo-300 focus-visible:text-indigo-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Montserrat (opens in a new tab)"
        >
          Montserrat
        </Link>{" "}
        typeface.
      </p>
    </footer>
  );
};

export default Footer;
