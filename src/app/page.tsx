import { HomeShell } from "@/components/HomeShell";

export default function Home() {
  return (
    <HomeShell
      variant="v1"
      defaultMode="dark"
      bodyClass="counter-scroll video-v1"
      showVideoBg={true}
      videoSrc="assets/images/overlay-2.mp4"
    />
  );
}
