"use client";

import { educationItems } from "@/data/education";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Education() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div id="education" className="section-education-experience flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-edu" />
        {t.education.tag}
      </div>
      <div className="timeline scroll-down">
        <div className="timeline-line">
          <div className="prg-line" />
        </div>
        {educationItems.map((item, i) => (
          <div className="timeline-item effectFade fadeUp no-div" key={i}>
            <p className="timeline-date text-black-56">{item.period[lang]}</p>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <p className="timeline-role fw-medium text-black-72">{item.role[lang]}</p>
              <p className="timeline-desc text-body-3 text-black-56">{item.description[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
