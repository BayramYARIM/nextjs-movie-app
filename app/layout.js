import { Kanit } from 'next/font/google'

import "@/styles/clear.css"
import "@/styles/global.css"
import Footer from "@/components/footer";
import Header from "@/components/header";

const kanit = Kanit({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: "Movie App | by BY",
  description: "A movie application for education purpose with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={kanit.className}>
      <body className="container"> 
        {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
