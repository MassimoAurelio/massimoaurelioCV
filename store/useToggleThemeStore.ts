export const useToggleThemeStore = defineStore({
  id: "toggleTheme",
  state: () => ({
    item: [
      { name: "Light" },
      { name: "Dark" }
    ],
    showDropDown: false,
  }),

  actions: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    
  },
});
