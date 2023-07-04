import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    viteSingleFile(),
    createHtmlPlugin({
      minify: true,
      entry: "src/main.ts",
      template: "./index.html",
      inject: {
        data: {
          title: "Profilm - Películas Santa Luzia | Películas 3M",
          description: "",
          contact: {
            whatsapp: "553187831017",
            phone: "3131641515",
          },
          url: {
            instagram: "https://www.instagram.com/profilmsl",
          },
        },
      },
    }),
  ],
  build: {
    minify: true,
  },
});
