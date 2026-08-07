import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Mohamed Matter - UI/UX Designer",
    description:
        "Mohamed Matter is a UI/UX Designer with 4+ years of experience across government, AI, fintech, SaaS, healthcare, mobility, and e-commerce products.",
    authors: [{ name: "Mohamed Matter" }],
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
        <html lang="en-US" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
