import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Brightmatter AI",
    short_name: "Brightmatter",
    description:
      "Applied intelligence that turns complex work into clear, explainable next steps.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAF5",
    theme_color: "#F6F27C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
