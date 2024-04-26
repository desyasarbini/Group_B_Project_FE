import { Html, Head, Main, NextScript } from "next/document";
import { Navigation } from "@/components";

export default function Document() {
  return (
    <Html lang="en">
      <Navigation />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
