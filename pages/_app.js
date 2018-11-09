import React from "react";
import App, { Container } from "next/app";
export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (React.createElement(Container, null,
            React.createElement(Wrapper, null,
                React.createElement(Component, Object.assign({}, pageProps)))));
    }
}
const Wrapper = (props) => (React.createElement("div", Object.assign({ style: {
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex"
    } }, props)));
