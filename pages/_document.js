import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (React.createElement("html", null,
            React.createElement(Head, null,
                React.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
                React.createElement("meta", { name: "Description", content: "" }),
                React.createElement("link", { rel: "stylesheet", href: "https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css" }),
                React.createElement("link", { rel: "stylesheet", href: "/static/styles/default.css" }),
                React.createElement("link", { href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet" }),
                this.props.styleTags,
                React.createElement("link", null)),
            React.createElement("body", null,
                React.createElement(Main, null),
                React.createElement(NextScript, null))));
    }
}
