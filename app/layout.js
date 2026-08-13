import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Habitat et service",
  description: "Habitat et service Bois MAROC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-white">
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
