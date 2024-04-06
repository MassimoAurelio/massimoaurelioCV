export const useToggleThemeStore = defineStore({
  id: "toggleTheme",
  state: () => ({
    showDropDown: false,
  }),

  actions: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
  },
});
