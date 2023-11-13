import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 px-6 lg:px-8">
          <div className="mx-auto max-w-6xl pt-4">
            <Header />
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
