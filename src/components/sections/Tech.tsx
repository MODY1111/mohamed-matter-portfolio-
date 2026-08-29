"use client";

import { ImageSwitch } from "@/components/ImageSwitch";
import { techStack, toolSkills, toolCategoryLabels, type ToolCategory } from "@/data/tech";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const categoryOrder: ToolCategory[] = ["design", "product", "collaboration", "ai"];

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
            <div className="tool-category-list">
                {categoryOrder.map((category) => {
                    const tools = techStack.filter((item) => item.category === category);
                    const skills = toolSkills.filter((item) => item.category === category);

                    if (tools.length === 0 && skills.length === 0) return null;

                    return (
                        <div key={category} className="tool-category">
                            <p className="tool-category_label text-caption fw-medium text-black-56">
                                {toolCategoryLabels[category][lang]}
                            </p>

                            {tools.length > 0 && (
                                <ul className="tech-list">
                                    {tools.map((item) => (
                                        <li key={item.name} className="wg-tech">
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
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {skills.length > 0 && (
                                <div className="tool-skill-list">
                                    {skills.map((item) => (
                                        <span
                                            key={item.label.en}
                                            className="tool-skill-item text-body-3 fw-medium text-black-72"
                                        >
                                            {item.label[lang]}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
