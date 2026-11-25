import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Habitat et Service | Importation & Distribution de Bois au Maroc",
  description: "Habitat et Service - Leader dans l'importation et la distribution de bois de qualité supérieure et ses dérivés au Maroc.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/home/habitatservice-logo.jpg', type: 'image/jpeg' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/home/habitatservice-logo.jpg' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-800 antialiased selection:bg-gold selection:text-slate-900 min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
