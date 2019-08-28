'use strict'

const api = (function() {

  const BASE_URL = "https://thinkful-list-api.herokuapp.com/badri/bookmarks";

  function getItem(){
    return fetch(`${BASE_URL}`)
  };

  function createItem(bookmarkObj){
    let stringifiedBookmark = JSON.stringify(bookmarkObj);
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedBookmark 
    });
  };

  function deleteItem(id){
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    });
  };

  return {
    getItem,
    createItem,
    deleteItem,
  };
    
})();