import inject from "@rollup/plugin-inject";
import tailwindcss from "@tailwindcss/vite";

export default {
  server: {
    open: true,
  },
  plugins: [
    tailwindcss(),
    inject({
      p5: "p5",
    }),
  ],
};
