import Head from "next/head";
import { Inter } from "next/font/google";
import Nav from "./components/common/Nav";
import Hero from "./components/home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Koffee store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-fit m-0">
        <div className="max-w-[1600px] mx-auto">
          <Nav />
          <Hero />
        </div>
      </main>
    </>
  );
}
