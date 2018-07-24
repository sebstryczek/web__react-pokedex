export default promise => (
  promise
    .then(data => ({ ...data, error: null }))
    .catch(error => ({ error }))
);
