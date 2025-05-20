"use client";
import { useRevealer } from "@/hooks/useRevealer";

export default function ContactPage() {
  useRevealer();

  return (
    <>
      <div className="revealer"></div>
      <div className="contact">
        <div className="col">
          <h2>Contact Us</h2>
        </div>

        <div className="col">
          <div className="contact-copy">
            <h2>Collaborations</h2>
            <h2>Studio@nuvoro.com</h2>
          </div>

          <div className="contact-copy">
            <h2>Inquiries</h2>
            <h2>support@nuvoro.com</h2>
          </div>

          <div className="socials">
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  );
}
