import { useEffect, useRef } from "react";

type Props = {
  showCloudItem?: boolean;
  showVideo?: boolean;
  containerClass?: string;
  videoSrc?: string;
};

export function BodyBackground({
  showCloudItem = true,
  showVideo = true,
  containerClass = "",
  videoSrc = "/assets/images/overlay-2.mp4",
}: Props = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Some mobile browsers (Data Saver / low-power mode) ignore the
    // autoplay attribute and leave the native play button showing even
    // though the video is muted+inline. Force play once metadata is
    // ready, and retry on the first user gesture if that's blocked too.
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    document.addEventListener("click", tryPlay, { once: true });

    return () => {
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("click", tryPlay);
    };
  }, [videoSrc]);

  return (
    <div className={`body-background${containerClass ? " " + containerClass : ""}`}>
      {showCloudItem && (
        <div className="bg-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" width={1440} height={900} src="/assets/images/item/cloud-bg.png" alt="background" />
        </div>
      )}
      {showVideo && (
        <div className="bg-video video-dark">
          <video ref={videoRef} className="video" muted autoPlay loop playsInline preload="auto">
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="overlay-1" />
        </div>
      )}
    </div>
  );
}
