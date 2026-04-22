import Navbar from "@/components/Navbar";
import CatSprite from "@/components/CatSprite";
import TopRuler from "@/components/TopRuler";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className="
          bg-[var(--bg)]
          text-[var(--text-primary)]
          font-display
          overflow-x-hidden
          antialiased
        "
      >
        <TopRuler />

        <main
          className="
            relative z-[1]
            flex flex-col items-center
            w-full min-h-screen

            /* Responsive padding */
            px-3 sm:px-5 md:px-8

            /* Safe area support (important for mobile) */
            pt-[env(safe-area-inset-top)]
            pb-[env(safe-area-inset-bottom)]
          "
        >
          {/* Navbar (sticky feel improvement) */}
          <div className="w-full max-w-6xl">
            <Navbar />
          </div>

          {/* Optional floating sprite */}
          {/* <CatSprite /> */}

          {/* Page Content Wrapper */}
          <div
            className="
              w-full
              max-w-4xl
              mx-auto

              /* spacing below navbar */
              mt-4 sm:mt-6 md:mt-8

              /* prevent edge sticking on small devices */
              px-1 sm:px-0
            "
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}