"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "de" | "ar";

const STORAGE_KEY = "site-lang";

const HTML_LANG: Record<Lang, string> = {
    en: "en-US",
    de: "de-DE",
    ar: "ar-AE",
};

export const RTL_LANGS: Lang[] = ["ar"];

type LanguageContextValue = {
    lang: Lang;
    dir: "ltr" | "rtl";
    setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLang(lang: Lang) {
    document.documentElement.lang = HTML_LANG[lang];
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "de" || stored === "ar") {
            setLangState(stored);
            applyDocumentLang(stored);
        }
    }, []);

    const setLang = (next: Lang) => {
        setLangState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
        applyDocumentLang(next);
    };

    const dir: "ltr" | "rtl" = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

    return (
        <LanguageContext.Provider value={{ lang, dir, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return ctx;
}
