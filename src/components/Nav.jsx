import Link from "next/link";

export default function Nav() {
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
            <Link href="/work">work</Link>
          </div>
          <div className="nav-item">
            <Link href="/studio">studio</Link>
          </div>
          <div className="nav-item">
            <Link href="/contact">contact</Link>
          </div>
          <div className="nav-copy">
            <p>toronto, ca</p>
          </div>
        </div>
      </div>
    </div>
  );
}
