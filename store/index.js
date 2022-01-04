export const state = () => ({
  theme: 'emerald',
});

export const mutations = {
  changeTheme(state, theme) {
    state.theme = theme;
  },
};
