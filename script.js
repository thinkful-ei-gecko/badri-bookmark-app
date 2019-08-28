'use strict'

const bookmarkScript = (function() {

  function render() {
  generateBookmark();
  }

  function watchForm() {
    $('#bookmarks').on('submit', 'form', event => {
      event.preventDefault(); 
      const title = $('#bookmark-title').val();
      const website_url = $('#bookmark-url').val();
      const rating = $('#rating').val();
      const description = $('#bookmark-description').val();
      const bookmarkObj = {title, website_url, description, rating};
      api.createItem(bookmarkObj)
        .then(bookmark => {
          store.bookmarks.push(bookmark)
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