"use client";

import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="projects">
      <div className="images">
        <Image src="/img33.jpg" alt="" width={1920} height={1080} />
        <Image src="/img4.jpg" alt="" width={1920} height={1080} />
        <Image src="/img11.jpg" alt="" width={1920} height={1080} />
        <Image src="/img2.jpg" alt="" width={1920} height={1080} />
      </div>
    </div>
  );
}
