import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import cn from "@/app/(lib)/cn";

const jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const avenir = localFont({
  src: "../public/fonts/avenir.otf",
  variable: "--font-avenir",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(poppins.variable, avenir.variable, jakarta.variable)}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
