'use strict'

let bookmarkSection = document.getElementById("bookmarks");

  bookmarkSection.addEventListener("click", function() {
      console.log("click");
    //Toggle between adding and removing the "active" class,
    //to highlight the button that controls the panel 
    let button = event.target;
    if (button.tagName !== "BUTTON") {
        return;
    } 
    button.classList.toggle("active");

    //Toggle between hiding and showing the active panel 
    let panel = button.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });



function bookmarkHTML(bookmark) {
    //if (bookmark.expanded) {
      /*
      let i;
      while (i<bookmark.rating){
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      }*/

      return `<button class="accordion">${bookmark.title} ${bookmark.rating}</button>
        <div class="panel">
            <p>${bookmark.description} <button type="button" class="delete-button">Delete</button></p>
        </div>`
      /*return `<li>${bookmark.title} - ${bookmark.description}
      <button class="close" data-id="${bookmark.id}">Close</button></li>`
    }
    else {
      return `<li>${bookmark.title}
      <button class="expand" data-id="${bookmark.id}">Expand</button></li>`
    }*/
  }
    
function generateBookmark() {
    const myHTML = store.bookmarks.map(bookmark => bookmarkHTML(bookmark));
    console.log(myHTML);
    $('#bookmarks').html(myHTML);
  }
  
function handleClose() {
    $('#bookmarks').on('click', '.close', event => {
      event.preventDefault();
      let bookmark = store.bookmarks.find(bookmark => bookmark.id === $(event.target).data('id'));
      bookmark.expanded = false;
      render();
    })
  }

  
function handleExpand() {
    $('#bookmarks').on('click', '.expand', event => {
        event.preventDefault();
        let bookmark = store.bookmarks.find(bookmark => bookmark.id == $(event.target).data('id'));
        bookmark.expanded = true;
        render();
    })
}



function generateAddBookmarkForm() {
    $('#add-bookmark').on('click', event => {
        event.preventDefault();
        $('#bookmarks').html(`<form class="bookmark-entry">
        <label for="bookmark-title">Name your bookmark: </label>
        <input type="text" id="bookmark-title" name="bookmark-title" class="entry" placeholder="Title">
        <label for="bookmark-url">Enter the URL: </label>
        <input type="text" id="bookmark-url" class="entry" placeholder="https://www.somewhere.com/">
        <label for="bookmark-description">Enter a description: </label>
        <input type="text" id="bookmark-description" class="entry" placeholder="I am Batman">
        <label for="rating"> Rate your bookmark: </label>
        <input type="number" id="rating" name="rating" class="rating" value="1" min="1" max="5">
        <button type="submit" id="addBookmark">Add</button>
        </form>`)
    })
}


//event listener -- transform bookmark data into list items
