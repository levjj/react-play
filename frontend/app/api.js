import superagent from 'superagent';

function formatUrl(path) {
  return `/api${path}`;
}

export default class ApiClient {
  get(path) {
    return new Promise((resolve, reject) => {
      superagent.get(formatUrl(path)).end((err, res) => {
        if (err) {
          reject(res);
        } else {
          resolve(res.body);
        }
      });
    });
  }

  post(path, options) {
    return new Promise((resolve, reject) => {
      const request = superagent.post(formatUrl(path));
      if (options && options.data) {
        request.send(options.data);
      }
      request.end((err, res) => {
        if (err) {
          reject(res);
        } else {
          resolve(res.body);
        }
      });
    });
  }
}
