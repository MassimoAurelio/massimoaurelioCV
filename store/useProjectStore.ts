interface IProject {
  name: string;
  href: string;
  src: string;
  time: string;
  description: string;
}

export const useProjectStore = defineStore({
  id: "project",
  state: () => ({
    items: [
      {
        name: "Poker back-end",
        href: "https://github.com/MassimoAurelio/poker-nest-back-end",
        src: "/poker.png",
        time: "2024",
        description:
          "Dynamic backend for a poker application using NestJS and TypeScript. Powered by PostgreSQL and Prisma ORM, it ensures efficient data management and real-time interactions via Socket.io for an immersive gaming experience.",
      },
      {
        name: "Poker front-end",
        href: "https://github.com/MassimoAurelio/poker-fron-end",
        src: "/poker.png",
        time: "2024",
        description:
          "Interactive poker application frontend built with Vue.js, Pinia, and Socket.io. It offers a sleek interface for real-time player engagement, with efficient state management and seamless communication.",
      },
      {
        name: "Movie App",
        href: "https://github.com/MassimoAurelio/movie-app",
        src: "/movie.png",
        time: "2024",
        description:
          "The CinemaNavigator application, built with TypeScript and Nuxt 3, utilizes server-side rendering and file-based routing for a smooth development experience. Styled with TailwindCSS for rapid UI development, it also incorporates Shadcn UI components for reusable and accessible design, enhancing user experience.",
      },
      {
        name: "Valorant",
        href: "https://github.com/MassimoAurelio/valorantV2",
        src: "/valorant hero.jpg",
        time: "2024",
        description:
          "Here’s the translation:An application for the video game Valorant written in TypeScript, styled using Tailwind CSS.",
      }
    ] as IProject[],
  }),
});
