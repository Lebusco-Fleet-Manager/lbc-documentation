// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Documentación",
      social: {
        github: "https://github.com/Lebusco-Fleet-Manager/",
      },
      sidebar: [
        {
          label: "Intrant",
          autogenerate: { directory: "intrant" },
        },
      ],
      favicon: "/favicon.ico",
    }),
  ],
  site: "https://Lebusco-Fleet-Manager.github.io",
  base: "/lbc-documentation",
});
