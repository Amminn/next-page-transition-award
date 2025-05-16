import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="header">
          <h1>nuvoro</h1>
        </div>

        <div className="hero-img">
          <img src="/hero-bg.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
