import xp from "@/public/101xp.jpg";
import mint from "@/public/mint.jpg";
import raketa from "@/public/raketa.png";

interface IWork {
  img: string;
  position: string;
  company: string;
  time: string;
  url: string;
}

export const useWorkStore = defineStore({
  id: "work",
  state: () => ({
    items: [
      {
        img: mint,
        position: "QA AUTOMATION",
        company: "Mint-Publishing",
        time: "2022 -",
      },
      {
        img: raketa,
        position: "QA ENGINEER",
        company: "RAKETA",
        time: "2022 - 2023",
        url: "https://raketa.travel/ru",
      },
      {
        img: xp,
        position: "QA ENGINEER",
        company: "101XP",
        time: "2022 - 2023",
        url: "https://101xp.com/?ysclid=lv2b2h10ox649545335",
      },
    ] as IWork[],
  }),
});
