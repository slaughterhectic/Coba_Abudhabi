import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Next 16 rejects any <Image quality> not listed here with a 400 — the
     photo gallery (70, 82) and hero (72) use non-default values, so without
     this every one of those images fails to load. */
  images: {
    qualities: [70, 72, 75, 82],
  },
};

export default nextConfig;
