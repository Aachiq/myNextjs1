import { Inter } from "next/font/google";
// import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{
          background:"beige",
          height:"80px",
          padding:"5px",
          // display:"flex",
          // justifyContent:"center"
         }}
        >
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}