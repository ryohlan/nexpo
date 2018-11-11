import React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from 'next/document'
import { AppRegistry } from 'react-native-web'

export default class MyDocument extends Document<any> {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    AppRegistry.registerComponent('Main', () => Main)
    const style = AppRegistry.getApplication('Main').getStyleElement()
    return { ...initialProps, style }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="Description" content="" />
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css"
          />
          <link rel="stylesheet" href="/static/styles/default.css" />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          {this.props.style}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
