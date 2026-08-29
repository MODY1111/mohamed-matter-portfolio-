"use client";

import { works } from "@/data/works";
import { awards } from "@/data/awards";
import { profile } from "@/data/profile";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

export function Work() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const featuredWorks = works.filter((w) => w.featured);
    const moreWorks = works.filter((w) => !w.featured);
    const platformHighlight = awards.find((a) => a.highlight);

    const renderCard = (w: (typeof works)[number], i: number) => (
        <div className="sticky-item" key={w.title}>
                        <div className="wg-work effectFade fadeUp mobile-reveal no-div">
                            <div className="work-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image
                                    width={700}
                                    height={427}
                                    src={w.image}
                                    alt={w.title}
                                />
                            </div>
                            <div className="wrap">
                                <div className="work-content">
                                    <div className="w-image">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <Image
                                            width={468}
                                            height={856}
                                            src={w.image}
                                            alt={w.title}
                                        />
                                    </div>
                                    <div className="content">
                                        <div className="content-top">
                                            <div className="w-logo">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    loading="lazy"
                                                    width={65}
                                                    height={32}
                                                    src={w.logo}
                                                    alt="logo"
                                                />
                                            </div>
                                            <h4 className="w-title letter-space--2 text-white-72">
                                                {w.title}
                                            </h4>
                                            <p className="w-desc text-white-56 text-body-3">
                                                {w.description[lang]}
                                            </p>
                                            <div className="w-highlight">
                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        {t.work.year}
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.year}
                                                    </p>
                                                </div>
                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        {t.work.role}
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.role[lang]}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-tag-list">
                                                {w.tags.map((tag) => (
                                                    <div
                                                        className="tag"
                                                        key={tag}
                                                    >
                                                        <span className="text-body-3 fw-medium text-white-72">
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="content-bottom">
                                            <div className="br-line" />
                                            <div className="group-action">
                                                <a
                                                    href={w.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="tf-btn-action style-white"
                                                >
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                    <span className="text text-body-3 letter-space--05 fw-medium">
                                                        {t.work.viewCase}
                                                    </span>
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                </a>
                                                <p className="text-white-40">
                                                    <span className="text-white-72">
                                                        {String(i + 1).padStart(
                                                            2,
                                                            "0",
                                                        )}
                                                    </span>{" "}
                                                    /{" "}
                                                    {String(
                                                        works.length,
                                                    ).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );

    return (
        <div id="work" className="section-work flat-spacing">
            <div className="sect-tag-row">
                <span className="sect-tag text-caption fw-medium">
                    <i className="icon icon-high-light" />
                    {t.work.featured}
                </span>
                <a
                    href={profile.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-3 link text-black-72"
                >
                    {t.work.seeAll}
                </a>
            </div>
            <div className="work-list element-sticky">
                {featuredWorks.map((w, i) => renderCard(w, i))}
            </div>

            {platformHighlight && (
                <div className="platform-highlight">
                    <div className="sect-tag text-caption fw-medium">
                        <i className="icon icon-stack" />
                        {t.work.highlight}
                    </div>
                    <ul className="award-list">
                        <li className="award-item hover-cursor-img">
                            <div className="left">
                                <h6 className="award_name letter-space--2 text-black-72">
                                    {platformHighlight.name}
                                </h6>
                                <p className="award_desc text-black-56">
                                    {platformHighlight.publisher[lang]}
                                </p>
                                <p className="award_desc text-black-56">
                                    {platformHighlight.highlight?.[lang]}
                                </p>
                            </div>
                            <h6 className="award_year text-black-72">
                                {platformHighlight.year}
                            </h6>
                            <div className="award_img hover-image">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    loading="lazy"
                                    width={158}
                                    height={224}
                                    src={platformHighlight.image}
                                    alt={platformHighlight.name}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            <div className="sect-tag-row">
                <span className="sect-tag text-caption fw-medium">
                    <i className="icon icon-high-light" />
                    {t.work.more}
                </span>
            </div>
            <div className="work-list element-sticky">
                {moreWorks.map((w, i) =>
                    renderCard(w, featuredWorks.length + i),
                )}
            </div>
        </div>
    );
}
