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
          title: "Profilm - Películas, Insulfim, PPF Santa Luzia",
          description:
            "Películas automotiva, residencial e comercial localizada na cidade de Santa Luzia, Minas Gerais. Atuando na área desde o ano de 2011. Hoje contamos com o mais avançado sistema de recorte computadorizado de películas.",
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
