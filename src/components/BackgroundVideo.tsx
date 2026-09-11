import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Video setup with HLS
    const videoSrc = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
    const video = videoRef.current;

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
        });
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        });

        return () => {
          hls.destroy();
        };
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", () => {
          video.play().catch(e => console.log("Autoplay prevented:", e));
        });
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        muted
        autoPlay
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
    </div>
  );
}
