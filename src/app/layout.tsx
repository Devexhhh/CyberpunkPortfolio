import Navbar from "@/components/Navbar";
import CatSprite from "@/components/CatSprite";
import "./globals.css"; // Ensure your globals are imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Ensure your bg variables are set in globals.css */}
      <body className="bg-[var(--bg)] text-[var(--text-primary)] font-display overflow-x-hidden">
        <main className="flex flex-col items-center w-full min-h-screen relative z-[1]">
          {/* Navbar and CatSprite are now persistent across all routes */}
          <Navbar />
          <CatSprite />

          {/* This renders the specific page content based on the URL */}
          {children}
        </main>
      </body>
    </html>
  );
}