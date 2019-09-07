export const loadStorageToState = (key = 'state') => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const loadStateToStorage = key => store => next => action => {
  const result = next(action);
  try {
    const serializedState = JSON.stringify(
      key ? store.getState()[key] : store.getState(),
    );
    localStorage.setItem(key || 'state', serializedState);
  } catch (e) {
    console.error('loadStateToStorage', e);
  }
  return result;
};
