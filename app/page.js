import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Hello NextJs</h1>
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              // className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
    </main>
  );
}
