"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Nav() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPagetransition() {
    document.documentElement.animate(
      [
        {
          clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNavigation = (path) => (e) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPagetransition,
    });
  };

  return (
    <div className="nav">
      <div className="col">
        <div className="nav-logo">
          <Link href="/">nuvoro</Link>
        </div>
      </div>
      <div className="col">
        <div className="nav-items">
          <div className="nav-item">
            <Link href="/work" onClick={handleNavigation("/work")}>
              work
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/studio" onClick={handleNavigation("/studio")}>
              studio
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/contact" onClick={handleNavigation("/contact")}>
              contact
            </Link>
          </div>
          <div className="nav-copy">
            <p>toronto, ca</p>
          </div>
        </div>
      </div>
    </div>
  );
}
