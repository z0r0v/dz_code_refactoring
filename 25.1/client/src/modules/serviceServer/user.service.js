const method = "GET";

class UserServiceFetch {
  constructor(url) {
    this.url = url;
  }

  getFetch(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => "eror UserServiceFetch");
  }

  getHXMhttp(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = () => {
        const request = JSON.parse(xhr.response);
        resolve(request);
      };
      xhr.send();
    });
  }
  add(url, name) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(name),
      headers: {
        "Content-Type":"application/json; charset=utf-8"
      }
    }).then(response => response.json());
  }

  chenge(url, name) {
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(name),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      // console.log(JSON.stringify(name));
      response.json()});
  }
}

function UserServiceHXMhttp(url) {
  this.url = url;
}

UserServiceHXMhttp.prototype.getHXMhttp = function(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      const request = JSON.parse(xhr.response);
      resolve(request);
    };
    xhr.send();
  });
};

UserServiceHXMhttp.prototype.sincGetHXMhttp = function(url, fun1, fun2) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    const request = JSON.parse(xhr.response);
    fun1();
    fun2();
  };
  xhr.send();
};

UserServiceHXMhttp.prototype.sincDell = function(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", url);
  xhr.onload = () => {};
  xhr.send();
};

UserServiceHXMhttp.prototype.patch = function(url, element) {
  let xhr = new XMLHttpRequest();
  xhr.open("PATCH", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = () => {};
  xhr.send(JSON.stringify(element));
};

export { UserServiceFetch, UserServiceHXMhttp };
