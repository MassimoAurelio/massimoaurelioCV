interface IStack {
  name: string;
  img: string;
}

export const useStackStore = defineStore({
  id: "stack",
  state: () => ({
    items: [
      { name: "JavaScript", img: "cib:js" },
      { name: "TypeScript", img: "cib:typescript" },
      { name: "Vue", img: "cib:vue-js" },
      { name: "Nuxt3", img: "cib:nuxt-js" },
      { name: "Java", img: "cib:java" },
      { name: "Maven", img: "devicon-plain:maven-wordmark" },
      { name: "Selenium", img: "simple-icons:selenium" },
      { name: "playwright", img: "devicon-plain:playwright" },
    ] as IStack[],
  }),
});
