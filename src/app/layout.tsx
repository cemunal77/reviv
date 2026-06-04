import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviv.ch — Marketplace circulaire suisse",
  description: "La marketplace 100% circulaire de Suisse. Uniquement des objets d'occasion, entre particuliers vérifiés, sans frais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}