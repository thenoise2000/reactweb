const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        royalblue: "#2c7ef8",
        "darkslategray-100": "#37465a",
        "darkslategray-200": "#333",
        "darkslategray-300": "#252f3d",
        gray: "#fafafa",
        dimgray: "#4d5254",
        mediumaquamarine: "#5bb59a",
        red: "#f82c2c",
        lightgray: "#cfcfcf",
        forestgreen: "#59ae43",
        aliceblue: "#edf3fd",
        darkgray: "#969696",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        "3xs": "10px",
      },
      fontSize: {
        xl: ["20px", "24px"],
        base: ["16px", "20px"],
        xs: ["12px", "16px"],
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = tailwindConfig;
