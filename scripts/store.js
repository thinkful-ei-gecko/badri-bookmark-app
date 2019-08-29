'use strict'

const store = (function () {
  const bookmarks = [];
  const setError = function(err) {
    this.error = err;
  }
  const clearError = function() {
    this.error = null;
  }
  const delBookmark = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id)
  }
  const _decorateBookmark = function(bookmark){
    return Object.assign(bookmark, { expanded: false });
  }
  const addBookmark = function(bookmark) {
    this.bookmarks.push(_decorateBookmark(bookmark));
  }
  return {
    adding: false,
    bookmarks,
    minRating: 0,
    error: null,
    setError,
    clearError,
    delBookmark,
    addBookmark,
  };
})();