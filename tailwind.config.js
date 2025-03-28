/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      Colors: {
        veryDarkBlue: /*(main background)*/ "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: /*(card background)*/ "hsl(244, 38%, 16%)",
        SoftViolet: /*(accent)*/ "hsl(277, 64%, 61%)",
        slightlyTransparentMain /*white (main paragraph)*/:
          "hsla(0, 0%, 100%, 0.75)",
        slightlyTransparentStat /*white (stat headings)*/:
          "hsla(0, 0%, 100%, 0.6)",
      },
    },
  },
  plugins: [],
};
