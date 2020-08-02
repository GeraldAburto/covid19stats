const fetchStatistics = async (country = undefined) => {
  const response = await fetch(`https://${process.env.REACT_APP_RAPIDAPI_HOST}/statistics${country ? `?country=${country}` : ''}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': `${process.env.REACT_APP_RAPIDAPI_HOST}`,
      'x-rapidapi-key': `${process.env.REACT_APP_REPIDAPI_KEY}`,
    },
  });
  return response.json();
};

export default fetchStatistics;
