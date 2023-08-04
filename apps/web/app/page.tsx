import Head from "next/head";

import { Header, PunchlineV2, Footer, ListWithComments } from "@yolo/ui";

import { Pendo } from "../components/analytics";

const isDevelopment = process.env["NODE_ENV"] === "development";

export default function Page() {
  return (
    <>
      <Pendo />
      <Head>{!isDevelopment && <Pendo />}</Head>
      <Header />
      <ListWithComments className="w-full rotate-1" />
      <PunchlineV2 />
      <Footer />
    </>
  );
}
