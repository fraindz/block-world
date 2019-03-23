import fetch from "isomorphic-fetch";
require("es6-promise").polyfill();

function fetchApi(url) {
  console.log("calling fetchapi :", url);
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    }
  }).then(response => response.json());
}

export { fetchApi };
