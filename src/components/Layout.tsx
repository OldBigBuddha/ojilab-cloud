import React, { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <ChakraLink as={Link} href="/">
          Home
        </ChakraLink>{" "}
        |{" "}
        <ChakraLink as={Link} href="/about">
          About
        </ChakraLink>{" "}
        |{" "}
        <ChakraLink as={Link} href="/users">
          Users List
        </ChakraLink>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&quote;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
