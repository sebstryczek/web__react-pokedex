export default promise => (
  promise
    .then(data => ({ data: {}, ...data, error: null }))
    .catch(error => ({ data: null, error }))
);
