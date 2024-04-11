interface IToggleThem {
  name: string;
}

export const useToggleThemeStore = defineStore({
  id: "toggleTheme",
  state: () => ({
    item: [{ name: "Light" }, { name: "Dark" }] as IToggleThem[],
    showDropDown: false,
  }),

  actions: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
  },
});
