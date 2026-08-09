import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HTML Claro — Editor visual local",
  description:
    "Edita HTML en código o directamente en la vista previa y expórtalo limpio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
