"use client";

import { ImageSwitch } from "@/components/ImageSwitch";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div id="footer" className="tf-footer flat-spacing">
      <div className="block-quote effectFade fadeUp no-div">
        <h5 className="quote-text font-3 fw-normal text-black-72">
          <span className="text-black-56">“</span>
          {t.footer.quote}
          <span className="text-black-56">”</span>
        </h5>
        <p className="quote-author font-3 text-black-56 h6 text-end">{t.footer.quoteAuthor}</p>
      </div>
      <div className="br-line" />
      <div className="foot-inner">
        <div className="isak effectFade fadeUp no-div">
          <p className="footer-name-mark">
            <span className="footer-name-mark_white">Mohamed</span>
            <span className="footer-name-mark_outline">Matter</span>
          </p>
        </div>
        <a href="#" className="f-logo effectFade fadeZoom">
          <div className="logo">
            <ImageSwitch
              light="/assets/images/logo/logo-icon.svg"
              dark="/assets/images/logo/logo-icon-dark.svg"
              width={44}
              height={17}
            />
          </div>
        </a>
      </div>
      <div className="foot-bottom">
        <p className="text-nocopy text-black-56 effectFade fadeUp no-div">
          {t.footer.rights} <br />© {new Date().getFullYear()} Mohamed Matter
        </p>
      </div>
    </div>
  );
}
