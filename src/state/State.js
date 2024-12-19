const StateManager = (() => {
  let state = {
    projects: [],
  };

  const listeners = [];

  const getState = () => state;

  const setState = (newState) => {
    state = { ...state, ...newState };
    listeners.forEach((listener) => {
      listener(state);
    });
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };
  return { getState, setState, subscribe };
})();

export default StateManager;
