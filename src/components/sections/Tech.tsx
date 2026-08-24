"use client";

import { ImageSwitch } from "@/components/ImageSwitch";
import { techStack } from "@/data/tech";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Tech() {
    const { lang } = useLanguage();
    const t = translations[lang];
    return (
        <div id="tech" className="section-tech-stack flat-spacing">
            <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
                <i className="icon icon-tech-stack" />
                {t.tech.tag}
            </div>
            <h4 key={lang} className="s-title letter-space--2 text-black-72 split-text effect-blur-fade" style={{ opacity: 1 }}>
                {t.tech.title}
            </h4>
            <ul className="tech-list">
                {techStack.map((item, i) => (
                    <li key={i} className="wg-tech">
                        <div className="tech-infor effectFade fadeUp no-div">
                            <div className="tech_image">
                                <ImageSwitch
                                    light={item.image.light}
                                    dark={item.image.dark}
                                    width={item.image.width}
                                    height={item.image.height}
                                />
                            </div>
                            <div className="tech_info">
                                <p className="info__name fw-medium text-black-72">
                                    {item.name}
                                </p>
                                <p className="info__duty text-black-56 text-body-3">
                                    {item.duty[lang]}
                                </p>
                            </div>
                        </div>
                        <div className="tech-progress">
                            <div
                                className="progress-line"
                                data-progress={item.progress}
                            >
                                <p className="progress-num text-caption">
                                    <span className="counter">
                                        <span
                                            className="number"
                                            data-speed="1500"
                                            data-to={item.progress}
                                        >
                                            10
                                        </span>
                                        %
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
