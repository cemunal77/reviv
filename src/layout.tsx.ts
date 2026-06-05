import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Reviv.ch — Marketplace circulaire suisse",
  description: "La marketplace 100% circulaire de Suisse.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
