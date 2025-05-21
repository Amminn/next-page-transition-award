import Image from "next/image";

export default function InfoPage() {
  return (
    <div className="info">
      <div className="col">
        <Image src="/img5.jpg" alt="random image" width={1920} height={1080} />
      </div>
      <div className="col">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          reiciendis deserunt placeat nisi magni praesentium deleniti, vero eum
          id recusandae vel similique enim cupiditate quisquam unde provident
          nostrum obcaecati explicabo?
        </p>
      </div>
    </div>
  );
}
