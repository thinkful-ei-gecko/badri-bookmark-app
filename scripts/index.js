'use strict'

$(document).ready(function() {
    bookmarkScript.bindEventListeners();
    bookmarkScript.render();
    api.getItem()
      .then((bookmark => {
        store.bookmarks = bookmark;
        bookmarkScript.render();
    }))
    //.catch(err => console.log(err.message)))
});
