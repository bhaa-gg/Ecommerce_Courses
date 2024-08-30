import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header/Header";
import Footer from "./_component/Footer/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import CartContext from "./_context/CartContext"

const inter = Roboto_Mono({ subsets: ["latin"], weight: "700" });
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider>
      <html lang="en">
        <body className={`relative ${inter.className}`}>
          <CartContext>
            <Header />
            <Toaster />
            {children}
            {/* <Footer /> */}
          </CartContext>
        </body>
      </html>
    </ClerkProvider>
  );
}
