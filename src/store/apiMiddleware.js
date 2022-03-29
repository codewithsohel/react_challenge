export default function () {
  return next => action => {
    switch (action.type) {
      default:
        return next(action);
    }
  };
}