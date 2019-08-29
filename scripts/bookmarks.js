'use strict'

function bookmarkHTML(bookmark) {

  let ratingStr = '';

  function makeStars(rating) {
    if (bookmark.rating===5) {
      return ratingStr = '★★★★★';
    }
    if (bookmark.rating===4) {
      return ratingStr = '★★★★☆';
    }
    if (bookmark.rating===3) {
      return ratingStr = '★★★☆☆';
    }
    if (bookmark.rating===2) {
      return ratingStr = '★★☆☆☆';
    }
    else {
      return ratingStr = '★☆☆☆☆';
    }
  };

  makeStars(bookmark.rating);

  if (bookmark.expanded) {
    return `<li class="selected">${bookmark.title} <li>${bookmark.desc} <a href="${bookmark.url}"><span id="site-link">Visit Site</span></a><button type="button" data-id="${bookmark.id}" class="delete-button"><img id="trash" src="https://image.flaticon.com/icons/svg/25/25214.svg"</img></button></li>
    <button class="close" data-id="${bookmark.id}">Close</button></li>`
  }
  else {
    return `<li>${bookmark.title} <span class="display-rating">${ratingStr}</span>
    <button class="expand" data-id="${bookmark.id}">Expand</button></li>`
    }
  }
   
function handleClose() {
    $('#bookmarks').on('click', '.close', event => {
      event.preventDefault();
      let bookmark = store.bookmarks.find(bookmark => bookmark.id === $(event.target).data('id'));
      bookmark.expanded = false;
      bookmarkScript.render();
    })
  }


function handleExpand() {
    $('#bookmarks').on('click', '.expand', event => {
        event.preventDefault();
        let bookmark = store.bookmarks.find(bookmark => bookmark.id == $(event.target).data('id'));
        bookmark.expanded = true;
        bookmarkScript.render();
    })
}

function generateBookmark() {
    const bookmarks = [...store.bookmarks];
    if (store.minRating < 1) {
      const myHTML = bookmarks.map(bookmark => bookmarkHTML(bookmark));
      $('#bookmarks').html(myHTML);
    }
    else {
      const filtered = bookmarks.filter(bookmark => bookmark.rating >= store.minRating);
      const myHTML = filtered.map(bookmark => bookmarkHTML(bookmark));
      $('#bookmarks').html(myHTML);
    }
  }

function generateAddBookmarkForm() {
    $('#add-bookmark').on('click', event => {
        event.preventDefault();
        $('#bookmarks').html(`<form class="bookmark-entry">
        <label for="bookmark-title">Name your bookmark: </label>
        <input type="text" id="bookmark-title" name="bookmark-title" class="entry" placeholder="Title" required>
        <label for="bookmark-url">Enter the URL: </label>
        <input type="url" id="bookmark-url" class="entry" placeholder="https://www.somewhere.com/" required>
        <label for="bookmark-description">Enter a description(optional): </label>
        <input type="text" id="bookmark-description" class="entry" placeholder="I am Batman">
        <label for="rating"> Rate your bookmark: </label>
        <input type="number" id="rating" name="rating" class="rating" value="1" min="1" max="5">
        <button type="submit" id="addBookmark">Add</button>
        </form>`)
    })
}

function generateError(message) {
    return `<section class="error-message"
      <p>Something went wrong... try again!</p>
      </section>`;
}

function renderError() {
  if (store.error) {
    const errorHTML = generateError(store.error);
    $('.error-message').html(errorHTML);
  }
  else {
    $('.error-message').empty();
  }
};

function addError(errMessage) {
  store.error = errMessage;
  renderError();
}