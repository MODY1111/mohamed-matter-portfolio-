"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      // No key configured yet — fall back to opening the user's email client
      // with the message pre-filled, so the form is never a dead end.
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value ?? "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value ?? "";
      const message = (form.elements.namedItem("message") as HTMLInputElement)?.value ?? "";
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Project enquiry from ${name}`
      )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.elements.namedItem("name") && (form.elements.namedItem("name") as HTMLInputElement).value,
          email: form.elements.namedItem("email") && (form.elements.namedItem("email") as HTMLInputElement).value,
          message: form.elements.namedItem("message") && (form.elements.namedItem("message") as HTMLInputElement).value,
          subject: "New enquiry from portfolio site",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="section-contact flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-send" />
        Contact
      </div>
      <h4 className="s-title letter-space--2 split-text effect-blur-fade">
        If you have a general or project <br className="d-none d-lg-block" />
        enquiry, please drop me an email <br className="d-none d-lg-block" />
        or fill the form - available now
      </h4>
      <form className="form-contact" id="contactform" onSubmit={handleSubmit} noValidate>
        {status === "success" && (
          <div className="flat-alert msg-success" style={{ marginBottom: 16 }}>
            Thanks for reaching out! Your message has been sent — I'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="flat-alert msg-error" style={{ marginBottom: 16 }}>
            Something went wrong sending that. Please email me directly instead.
          </div>
        )}
        <div className="form-content effectFade fadeUp no-div">
          <fieldset className="field-ip">
            <input type="text" name="name" id="name" placeholder="Your Name *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="email" name="email" id="email" placeholder="Email Address *" required />
          </fieldset>
          <fieldset className="field-ip">
            <input type="text" name="message" id="message" placeholder="Project Description" />
          </fieldset>
        </div>
        <div className="form-action effectFade fadeUp no-div">
          <div className="send-wrap">
            <button type="submit" className="tf-btn animate-btn animate-dark" disabled={status === "sending"}>
              <span className="text-body-3">{status === "sending" ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
          <a href={`mailto:${profile.email}`} className="text-body-1 link letter-space--2 text-black-72">
            {profile.email}
          </a>
        </div>
      </form>
    </div>
  );
}
