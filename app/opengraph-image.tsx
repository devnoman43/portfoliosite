import { ImageResponse } from "next/og";
import { site } from "./site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#07101f", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800, letterSpacing: -2 }}>
          NA<span style={{ color: "#6ee7f5" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#6ee7f5", marginTop: 20 }}>{site.jobTitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#aeb8c7" }}>TypeScript · Next.js · React · Node.js · Shopify</div>
      </div>
    ),
    size
  );
}
