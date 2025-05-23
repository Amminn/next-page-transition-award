"use client";

import Link from "next/link"; // Make sure Link is imported
import { useTransitionRouter } from "next-view-transitions";

export default function Nav() {
  const router = useTransitionRouter();

  function slideInOut() {
    // Your animation logic remains the same
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  // You can keep this helper function or inline the logic
  const handleTransitionNavigation = (e, path) => {
    e.preventDefault(); // Prevent Link's default navigation
    router.push(path, {
      onTransitionReady: slideInOut,
    });
  };

  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          {/* Use Link component */}
          <Link href="/" onClick={(e) => handleTransitionNavigation(e, "/")}>
            Index
          </Link>
        </div>
      </div>
      <div className="links">
        <div className="link">
          <Link
            href="/project"
            onClick={(e) => handleTransitionNavigation(e, "/project")}
          >
            Projects
          </Link>
        </div>
        <div className="link">
          <Link
            href="/info"
            onClick={(e) => handleTransitionNavigation(e, "/info")}
          >
            Info
          </Link>
        </div>
      </div>
    </nav>
  );
}
