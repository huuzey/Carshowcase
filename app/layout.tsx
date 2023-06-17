import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Mac",
  description: "Discover an outstanding cars around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
