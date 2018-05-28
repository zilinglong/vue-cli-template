const actions = {
  increment: ({
    commit
  }, payload) => commit('increment', payload),
  decrement: ({
    commit
  }, payload) => commit('decrement', payload),
  changeLoginState: ({
    commit
  }) => commit('changeLoginState')
};
export default actions;
