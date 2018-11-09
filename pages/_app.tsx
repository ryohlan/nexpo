import React from "react";
import App, { Container, NextAppContext } from "next/app";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = (props: any) => (
  <div
    style={{
      minWidth: "100vw",
      minHeight: "100vh",
      display: "flex"
    }}
    {...props}
  />
);
