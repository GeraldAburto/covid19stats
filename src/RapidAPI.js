const fetchStatistics = (country = undefined) => new Promise((resolve, reject) => {
  fetch(`https://${process.env.REACT_APP_RAPIDAPI_HOST}/statistics${country ? `?country=${country}` : ''}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': `${process.env.REACT_APP_RAPIDAPI_HOST}`,
      'x-rapidapi-key': `${process.env.REACT_APP_REPIDAPI_KEY}`,
    },
  }).then((response) => {
    response.json()
      .then((data) => {
        if (data.errors && data.errors.length) reject(data.errors);
        else resolve(data);
      })
      .catch((reason) => reject(reason));
  }).catch((reason) => reject(reason));
});

export default fetchStatistics;
