import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <div className="link">
          <Link href="/">Amminn</Link>
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
