"use client";

import { awards } from "@/data/awards";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <div id="about" className="section-about flat-spacing">
      <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
        <i className="icon icon-user-circle" />
        {t.about.tag}
      </div>
      <h4 key={lang} className="s-title font-serif letter-space--2 text-black-72 split-text effect-blur-fade" style={{ opacity: 1 }}>
        {t.about.title}
      </h4>
      <p className="s-desc text-black-56 scrolling-effect effectTop">
        {t.about.desc}
      </p>
      <ul className="award-list">
        {awards.map((a) => (
          <li className="award-item hover-cursor-img" key={a.name + a.year}>
            <div className="left">
              <h6 className="award_name letter-space--2 text-black-72">{a.name}</h6>
              <p className="award_desc text-black-56">{a.publisher[lang]}</p>
            </div>
            <h6 className="award_year text-black-72">{a.year}</h6>
            <div className="award_img hover-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" width={158} height={224} src={a.image} alt={a.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
