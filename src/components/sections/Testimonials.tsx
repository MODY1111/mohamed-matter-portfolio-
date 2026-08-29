"use client";

import { organizations } from "@/data/organizations";
import { works } from "@/data/works";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div id="testimonial" className="section-testimonial flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-tes" />
        {t.testimonials.tag}
      </div>
      <div className="heading overflow-hidden">
        <div className="head-left">
          <h4 key={lang} className="s-title letter-space--2 text-black-72 split-text effect-blur-fade" style={{ opacity: 1 }}>
            {t.testimonials.title}
          </h4>
          <div className="box-counter effectFade fadeUp no-div">
            <div className="wg-counter">
              <p className="counter h1 d-flex font-2 letter-space--2 text-black-72">
                <span className="number" data-speed="1000" data-to={works.length}>
                  0
                </span>
                +
              </p>
              <p className="text text-black-56">{t.testimonials.completed}</p>
            </div>
            <div className="wg-counter">
              <p className="text text-black-56">{t.testimonials.happy}</p>
            </div>
          </div>
        </div>
      </div>

      <ul className="org-tag-list effectFade fadeUp no-div">
        {organizations.map((org) => (
          <li key={org.name} className="org-tag text-body-1 fw-medium text-black-72">
            {org.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
