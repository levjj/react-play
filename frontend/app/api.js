import superagent from 'superagent';

export default class ApiClient {
  constructor(isClient) {
    this.isClient = isClient;
  }

  formatUrl(path) {
    if (this.isClient) {
      return `/api${path}`;
    } else {
      return `http://localhost:3001${path}`;
    }
  }

  get(path) {
    return new Promise((resolve, reject) => {
      superagent.get(this.formatUrl(path)).end((err, res) => {
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
      const request = superagent.post(this.formatUrl(path));
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
