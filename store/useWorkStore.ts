import xp from "@/public/101xp.jpg";
import mint from "@/public/mint.jpg";
import raketa from "@/public/raketa.png";

export const useWorkStore = defineStore({
  id: "work",
  state: () => ({
    items: [
      {
        img: mint,
        position: "QA AUTOMATION", // Исправлено на position
        company: "Mint-Publishing",
        time: "2022 -",
      },
      {
        img: raketa,
        position: "QA ENGINEER",
        company: "RAKETA",
        time: "2022 - 2023",
      },
      {
        img: xp,
        position: "QA ENGINEER",
        company: "101XP",
        time: "2022 - 2023",
      },
    ],
  }),
});
