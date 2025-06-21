module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx,mdx,md}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        background: "#F4F0E6",
        text: "#4B3A2B",
        accent1: "#C8A974",
        accent2: {
          brick: "#B46B54",
          plum: "#55354E",
        },
        soft: {
          beige: "#D8C7B5",
          sand: "#EAE3D5",
        },
      },
      fontFamily: {
        headline: ["Bona Nova SC", "serif"],
        body: ["Newsreader", "serif"],
        accent: ["Doulaise", "cursive"],
        doulaise: ["Monsieur La Doulaise", "cursive"],
        meie: ["Meie Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "sans-serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        ballet: ["Ballet", "cursive"],
        bodoni: ["Bodoni Moda", "serif"],
        bonanova: ["Bona Nova SC", "serif"],
        dmserifdisplay: ["DM Serif Display", "serif"],
        dmseriftext: ["DM Serif Text", "serif"],
        gloock: ["Gloock", "serif"],
      },
    },
  },
  plugins: [],
};