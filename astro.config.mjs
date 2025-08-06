// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
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
        {
          label: "Lebusco",
          items: [
            {
              label: "Precintos",
              items: [
                {
                  label: "Estados",
                  items: [
                    { label: "Firma", slug: "lebusco/precintos/estados/sign" },
                  ],
                },
                {
                  label: "Naves",
                  items: [
                    { label: "", slug: "lebusco/precintos/naves/formulario" },
                    { label: "", slug: "lebusco/precintos/naves/table" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      favicon: "/favicon.ico",
    }),
  ],
  site: "https://Lebusco-Fleet-Manager.github.io",
  base: "/lbc-documentation",
});
