import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Favicons for Google Search and browsers */}
                {/* Standard favicon path that Google looks for */}
                <link rel="icon" href="/favicon-32.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32.png" />
                <link rel="shortcut icon" href="/favicon-32.png" />
                {/* Alternative favicon using logo for better visibility */}
                <link rel="icon" type="image/png" sizes="192x192" href="/og-image.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/og-image.png" />
                {/* Apple touch icons */}
                <link rel="apple-touch-icon" sizes="180x180" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/icon-180-apple.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="/icon-180-apple.png" />
                {/* Microsoft tiles */}
                <meta name="msapplication-TileImage" content="/icon-180-apple.png" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                {/* slick-carousel styles should be loaded via Document Head, not next/head on pages */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
