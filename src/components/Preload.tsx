import { Helmet } from "react-helmet";

export default function Preload() {
  // Critical resources that should be preloaded immediately
  const criticalResources = [
    // Preload hero image
    { rel: "preload", href: "/headshot.png", as: "image" },

    // Font preloading (if you're using custom fonts)
    // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    // { rel: 'preload', href: '/fonts/your-font.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },

    // Preload critical CSS
    { rel: "preload", href: "/assets/css/main.css", as: "style" },

    // DNS prefetch for external resources
    { rel: "dns-prefetch", href: "https://github.com" },
    { rel: "dns-prefetch", href: "https://linkedin.com" },
  ];

  return (
    <Helmet>
      {criticalResources.map((resource, index) => (
        <link key={index} {...resource} />
      ))}

      {/* Add preload hints for critical JavaScript chunks */}
      <link rel="modulepreload" href="/assets/js/vendor.js" />

      {/* Improve performance with resource hints */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />

      {/* Enable CORS for fonts and other resources */}
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />

      {/* Add cache control hints */}
      <meta httpEquiv="Cache-Control" content="max-age=31536000" />
    </Helmet>
  );
}
