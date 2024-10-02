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
        href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=massimoaureliowork@gmail.com",
        icon: "lets-icons:message",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "Telegram",
        href: "https://t.me/massimoaurelio",
        icon: "la:telegram",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "GitHub",
        href: "https://github.com/MassimoAurelio",
        icon: "mdi:github",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "CodeWars",
        href: "https://www.codewars.com/users/MassimoAurelio",
        icon: "cib:codewars",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "LeetCode",
        href: "https://leetcode.com/u/massimoaureliowork/",
        icon: "cib:leetcode",
        arrow: "ph:arrow-up-right-thin",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/massimoaurelio/",
        icon: "mdi:linkedin",
        arrow: "ph:arrow-up-right-thin",
      },
    ] as IConnect[],
  }),

  actions: {},
});
