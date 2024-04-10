interface IConnect {
  name: string;
  href: string;
  icon: string;
  arrow: string;
}

export const useConnect = defineStore({
  id: "Connect",
  state: () => ({
    items: [
      {
        name: "Gmail",
        href: "/",
        icon: "lets-icons:message",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "Telegram",
        href: "/",
        icon: "la:telegram",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "Instagram",
        href: "/",
        icon: "bi:instagram",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "GitHub",
        href: "/",
        icon: "mdi:github",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "CodeWars",
        href: "/",
        icon: "cib:codewars",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "LinkedIn",
        href: "/",
        icon: "mdi:linkedin",
        arrow: "ph:arrow-up-right-thin",
      },
      ,
    ] as IConnect[],
  }),

  actions: {},
});
