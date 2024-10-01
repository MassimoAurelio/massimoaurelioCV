interface IStack {
  name: string;
  img: string;
}

export const useAutomationStore = defineStore({
  id: "automation",
  state: () => ({
    items: [
      { name: "Java", img: "cib:java" },
      { name: "Maven", img: "devicon-plain:maven-wordmark" },
      { name: "Gradle", img: "cib:gradle" },
      { name: "Selenium", img: "simple-icons:selenium" },
      { name: "Playwright", img: "devicon-plain:playwright" },
      { name: "Postman", img: "cib:postman" },
      { name: "Jenkins", img: "devicon-plain:jenkins" },
      { name: "Junit 5", img: "devicon-plain:junit-wordmark" },
      { name: "REST Assured", img: "dashicons:rest-api" },
    ],
  }),
});

export const useStackStore = defineStore({
  id: "stack",
  state: () => ({
    items: [
      { name: "JavaScript", img: "cib:js" },
      { name: "Socket io", img: "cib:socket-io" },
      { name: "TypeScript", img: "cib:typescript" },
      { name: "HTML", img: "ic:baseline-html" },
      { name: "CSS", img: "ic:round-css" },
      { name: "Tailwind", img: "bxl:tailwind-css" },
      { name: "Vue", img: "cib:vue-js" },
      { name: "Nuxt3", img: "cib:nuxt-js" },
      { name: "Vite", img: "tabler:brand-vite" },
      { name: "yarn", img: "tabler:brand-yarn" },
      { name: "npm", img: "cib:npm" },
      { name: "vitest", img: "devicon-plain:vitest" },
    ] as IStack[],
  }),
});

export const useBackStackStore = defineStore({
  id: "back",
  state: () => ({
    items: [
      { name: "JavaScript", img: "cib:js" },
      { name: "TypeScript", img: "cib:typescript" },
      { name: "Nest", img: "simple-icons:nestjs" },
      { name: "Prisma ORM", img: "simple-icons:prisma" },
      { name: "Postgresql", img: "cib:postgresql" },
      { name: "Socket io", img: "cib:socket-io" },
    ] as IStack[],
  }),
})
