'use strict'

const bookmarkScript = (function() {

  function render() {
  generateBookmark();
  }

  function watchForm() {
    $('#bookmarks').on('submit', 'form', event => {
      event.preventDefault(); 
      const title = $('#bookmark-title').val();
      const url = $('#bookmark-url').val();
      const rating = $('#rating').val();
      const desc = $('#bookmark-description').val();
      const bookmarkObj = {title, url, desc, rating};
      api.createItem(bookmarkObj)
        .then(bookmark => {
          store.bookmarks.push(bookmark )
          console.log(bookmark);
          render();
        }) 
    });
  }

  function bindEventListeners() {
    watchForm();
    render();
    handleExpand();
    handleClose();
    generateAddBookmarkForm(); 
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
   };
}());