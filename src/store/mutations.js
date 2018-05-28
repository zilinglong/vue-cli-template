const mutations = {
  increment: (state, payload) => {
    state.count = state.count + payload;
  },
  decrement: (state, payload) => {
    state.count = state.count - payload;
  },
  changeLoginState: (state) => {
    state.loginState = 1;
  }
};
export default mutations;
