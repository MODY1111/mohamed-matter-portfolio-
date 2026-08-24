"use client";

import { useLanguage, type Lang } from "@/i18n/LanguageContext";

const OPTIONS: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "ar", label: "AR" },
];

export function LanguageSwitch() {
    const { lang, setLang } = useLanguage();

    return (
        <div className="tf-lang-switch">
            {OPTIONS.map((opt, i) => (
                <div key={opt.code} style={{ display: "contents" }}>
                    {i > 0 && <span className="tf-lang-switch_divider" />}
                    <button
                        type="button"
                        className={lang === opt.code ? "active" : ""}
                        onClick={() => setLang(opt.code)}
                        aria-pressed={lang === opt.code}
                    >
                        {opt.label}
                    </button>
                </div>
            ))}
        </div>
    );
}
