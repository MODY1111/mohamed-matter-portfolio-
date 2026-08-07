"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SmoothScrollProps = {
    children: React.ReactNode;
};

// Without this, GSAP's ScrollTrigger recalculates on its own RAF loop,
// which drifts out of sync with Lenis's virtual scroll position — most
// visible as a flash of unrevealed (opacity: 0) content right after an
// anchor-link jump, before ScrollTrigger catches up.
function LenisScrollTriggerSync() {
    useLenis(() => {
        ScrollTrigger.update();
    });
    return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.08,
                duration: 1.2,
                smoothWheel: true,
                syncTouch: false,
                anchors: true,
            }}
        >
            <LenisScrollTriggerSync />
            {children}
        </ReactLenis>
    );
}