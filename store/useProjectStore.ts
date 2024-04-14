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
        name: "Movie App",
        href: "https://github.com/MassimoAurelio/movie-app",
        src: "/valorant.jpg",
        time: "2024",
        description:
          "Open source project I started in March 2020 to track the spread of COVID-19. Website gained over 50,000 views in the first year and contributors from around the world.",
      },
      {
        name: "Valorant",
        href: "https://github.com/MassimoAurelio/valorantV2",
        src: "/valorant.jpg",
        time: "2024",
        description:
          "Designing and developing Internal software used to manage the companies $95.79 billion of dollars in private real-estate assets.",
      },
    ] as IProject[],
  }),
});
