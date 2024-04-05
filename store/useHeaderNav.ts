interface IHeaderNavInterface {
  label: string;
  href: string;
}

export const useHeaderNav = defineStore({
  id: "headerNav",
  state: (): { items: IHeaderNavInterface[] } => ({
    items: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Stack", href: "/stack" },
    ],
  }),
});
