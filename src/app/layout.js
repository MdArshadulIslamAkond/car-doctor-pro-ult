
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import '@smastrom/react-rating/style.css'
import AuthProvider from "@/services/AuthProvider";
import Navbar from "@/components/shared/Navbar";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Car doctor pro ult",
   template: `%s | Car doctor pro ult`
  },
  description: "Car Reapering Workshop",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" data-theme = "mytheme">
     <body
      cz-shortcut-listen="true"
      // suppressHydrationWarning={true}
      className={`${geistSans.variable} ${geistMono.variable} antialiased w-[1280px] mx-auto`}
      >
        <AuthProvider>
        <ToastContainer />

        <Navbar />
       <div>
       {children}
       </div>
       <Footer />
     </AuthProvider>
      </body>
    </html>
  );
}
