'use strict'

let store = {
    adding: false,
    bookmarks: [],
    minRating: 0,
    delBookmark: function(id){
      this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id)
  },
}