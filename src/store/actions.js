const actions = {
  increment: ({
    commit
  }, payload) => commit('increment', payload),
  decrement: ({
    commit
  }, payload) => commit('decrement', payload)
};
export default actions;
