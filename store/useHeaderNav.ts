interface IHeaderNavInterface {
  label: string;
  href: string;
}

export const useHeaderNav = defineStore({
  id: "headerNav",
  state: () => ({
    items: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Stack", href: "/stack" },
    ] as IHeaderNavInterface[],
    showHeaderLinks: false,
  }),

  actions: {
    toggleHeaderLinks() {
      this.showHeaderLinks = !this.showHeaderLinks;
    },
  },
});
