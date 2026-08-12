/**
 * Muted, looping background video.
 *
 * Two sources on purpose: some Chromium builds (notably on Linux) report
 * `canPlayType('video/mp4; codecs="avc1…"') === "probably"` and then never
 * decode the stream — readyState stays 0 with no error fired. VP9/WebM is
 * royalty-free and decodes everywhere, so it leads; the H.264 MP4 stays as
 * the fallback for older Safari.
 */
export default function BgVideo({
  name,
  className,
  preload = "none",
}: {
  name: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
}) {
  return (
    <video
      className={className}
      poster={`/media/${name}-poster.webp`}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={`/media/${name}.webm`} type="video/webm" />
      <source src={`/media/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
