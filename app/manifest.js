export default function manifest() {
  return {
    name: 'El Santo Rosario',
    short_name: 'Rosario',
    description: 'Guia para rezar el Santo Rosario',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],  
    screenshots: [
    {
      src: "screenshot-narrow.png",
      sizes: "320x320",
      type: "image/png",
      form_factor: "narrow",
      label: "Narrow"
    },
    {
      src: "screenshot-wide.png",
      sizes: "320x320",
      type: "image/png",
      form_factor: "wide",
      label: "Wide"
    }
  ]
  }
}
