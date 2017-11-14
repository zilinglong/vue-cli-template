const mutations = {
  increment: state => {
    state.count = state.count + 1;
  },
  decrement: state => {
    state.count = state.count - 1;
  }
};
export default mutations;
