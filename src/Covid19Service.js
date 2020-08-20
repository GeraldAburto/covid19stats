class Covid19Service {
  static getStatistics(search = undefined) {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_HOST}/api/stats${search ? `?search=${search}` : ''}`, {
        method: 'GET',
      }).then((response) => {
        if (response.status === 200) {
          return response.json().then((json) => resolve(json));
        } if (response.status === 404) {
          return resolve(undefined);
        }

        return reject(response.statusText);
      }).catch((reason) => reject(reason));
    });
  }

  static getCountry(country) {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.REACT_APP_API_HOST}/api/stats/country/${country}`, {
        method: 'GET',
      }).then((response) => {
        if (response.status === 200) {
          return response.json().then((json) => resolve(json));
        } if (response.status === 404) {
          return resolve(undefined);
        }

        return reject(response.statusText);
      }).catch((reason) => reject(reason));
    });
  }
}

export default Covid19Service;
