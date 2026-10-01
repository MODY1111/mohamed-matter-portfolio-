import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageContext";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Mohamed Matter — Product Designer",
    description:
        "Mohamed Matter is a Product Designer in Abu Dhabi with 4+ years designing government, AI, fintech, SaaS, and healthcare products.",
    authors: [{ name: "Mohamed Matter" }],
    // The site ships its own EN/DE/AR; browser auto-translate rewrites DOM
    // nodes React owns and crashes reconciliation (removeChild NotFoundError).
    other: { google: "notranslate" },
    icons: {
        icon: "/assets/images/logo/favicon.svg",
        apple: "/assets/images/logo/favicon.svg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US" translate="no" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <LanguageProvider>
                    <SmoothScroll>
                        <ThemeProvider>{children}</ThemeProvider>
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
