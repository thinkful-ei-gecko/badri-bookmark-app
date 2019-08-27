'use strict'



function bookmarkHTML(bookmark) {
    //if (bookmark.expanded) {
      return `<button class="accordion">${bookmark.title}</button>
        <div class="panel">
            <p>${bookmark.description}</p>
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
        <label for="bookmark-title>Name your bookmark: </label>
        <input type="text" id="bookmark-title" class="entry" placeholder="Title">
        <label for="bookmark-url>Enter the URL: </label>
        <input type="text id="bookmark-url class="entry" placeholder="https://wwww.somewhere.com/">
        <label for="bookmark-description">Enter a description: </label>
        <input type="text" id="bookmark-description" class="entry" placeholder="I am Batman">
        <input type="radio" name="rating" value="1" checked> 1<br>
        <input type="radio" name="rating" value="2"> 2<br>
        <input type="radio" name="rating" value="3"> 3<br>
        <input type="radio" name="rating" value="4"> 4<br>
        <input type="radio" name="rating" value="5"> 5<br>
        <button type="submit">Add</button>
        </form>`)
    })
}


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    //Toggle between adding and removing the "active" class,
    //to highlight the button that controls the panel 
    this.classList.toggle("active");

    //Toggle between hiding and showing the active panel 
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//event listener -- transform bookmark data into list items
