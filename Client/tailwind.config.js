/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx}"],
   theme: {
      extend: {
         colors: {
            light: "#f1faee",
            dark: "#001219",
            "Light-Azure": "#007FFF15",
            Azure: "#007FFF50",
            "Red-X": "#e63946",
         },
      },
   },
   plugins: [],
};