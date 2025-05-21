"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

export default function Nav() {
  const router = useTransition();

  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <a href="/"></a>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <Link href="/project">Projects</Link>
        </div>
        <div className="link">
          <Link href="/info">Info</Link>
        </div>
      </div>
    </nav>
  );
}
