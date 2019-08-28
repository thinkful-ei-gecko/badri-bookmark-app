'use strict'

const api = (function() {

  const BASE_URL = "https://thinkful-list-api.herokuapp.com/badri/bookmarks";

  function getItem(){
    return fetch(`${BASE_URL}`)
        .then(response => response.json())
  }

  function createItem(title, url, desc, rating){
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, url, desc, rating})
    })
    .then(response => response.json())
  }

  function deleteItem(id){
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
  } 

  return {
    getItem,
    createItem,
    deleteItem,
    }
    
})();