'use strict'

const bookmarkScript = (function() {

  function render() {
    generateBookmark();
  }

  function filterRating() {
    $('#min-rating-box').on('change', '#min-rating', function() {
        store.minRating = this.value;
        render();
    });
  }

  function deleteBookmark() {
    $('#bookmarks').on('click', '.delete-button', event => {
      event.stopPropagation();
      const deleteID = $(event.target).data('id');
      api.deleteItem(deleteID)
        .then(bookmark => {
          store.delBookmark(deleteID)
          render();
        })
    })
  }

  function watchForm() {
    $('#bookmarks').on('submit', 'form', event => {

      event.preventDefault(); 
      
        const title = $('#bookmark-title').val();
        const url = $('#bookmark-url').val();
        let rating = $('#rating').val();
        const desc = $('#bookmark-description').val();

      const bookmarkObj = {title, url, desc, rating};

      api.createItem(bookmarkObj)
        .then(res => res.json())
        .then(bookmark => {
          store.bookmarks.push(bookmark)
          render();
        });
      }); 
  }

  function bindEventListeners() {
    watchForm();
    render();
    generateAddBookmarkForm(); 
    deleteBookmark();
    filterRating();
    handleClose();
    handleExpand();
  }

  return {
    render: render,
    bindEventListeners: bindEventListeners,
   };

}());