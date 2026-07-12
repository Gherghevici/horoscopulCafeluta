import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Horoscopul Cafeluța ☕!",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased min-h-full text-taupe-100 italic`}
    >
      <body className=" flex flex-col flex-1 justify-between min-h-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 320" className="fill-taupe-200">
        <path  d="M0,192L30,181.3C60,171,120,149,180,138.7C240,128,300,128,360,149.3C420,171,480,213,540,202.7C600,192,660,128,720,106.7C780,85,840,107,900,112C960,117,1020,107,1080,90.7C1140,75,1200,53,1260,69.3C1320,85,1380,139,1410,165.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 320" className="fill-yellow-950">
          <path  d="M0,32L30,58.7C60,85,120,139,180,170.7C240,203,300,213,360,208C420,203,480,181,540,160C600,139,660,117,720,96C780,75,840,53,900,80C960,107,1020,181,1080,224C1140,267,1200,277,1260,261.3C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
       </body>
    </html>
  );
}
