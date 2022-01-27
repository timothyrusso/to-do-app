class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  _handleErrorResponse(err) {
    console.log("this is an error", err);
  }

  getTasks() {
    return fetch(this._baseUrl, {
      headers: this._headers,
      method: "GET",
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse);
  }

  getTask(id) {
    return fetch(`${this._baseUrl}/${id}`, {
      headers: this._headers,
      method: "GET",
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse);
  }

  createTask(data) {
    return fetch(this._baseUrl, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse);
  }

  updateTask(id, data) {
    return fetch(`${this._baseUrl}/${id}`, {
      headers: this._headers,
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse);
  }

  deleteTask(id) {
    return fetch(`${this._baseUrl}/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(this._handleResponse)
      .catch(this._handleErrorResponse);
  }
}
