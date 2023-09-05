import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import homStyles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jung Woo</title>
      </Head>
      <section className={homStyles.headingMd}>
        <p>Jung Woo Introduction</p>
        <p>This is a website</p>
      </section>
      <section className={`${homStyles.headingMd} ${homStyles.padding1px}`}>
        <h2 className={homStyles.paddingLg}>Blog</h2>
        <ul className={homStyles.list}></ul>
      </section>
    </div>
  );
}
