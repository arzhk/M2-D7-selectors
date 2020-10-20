/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar (DONE)
        EX12) Write a function to remove the "Search" magnifying glass icon (DONE)
        EX13) Write a function to change the background of the jumbotron (DONE)
        EX14) Write a function to change the color of the main title (DONE)
        EX15) Write a function to change the column size for post headings (DONE)
        EX16) Write a function to remove all the links under "Elsewhere" (DONE)
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post (DONE)
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title) (DONE)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post (DONE)
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name (DONE)
    */

function newNavLink() {
  const navbar = document.querySelector("nav");
  const newLink = document.createElement("a");
  newLink.innerText = "New Link";
  newLink.classList.add = "p-2";
  newLink.classList.add = "text-muted";
  navbar.appendChild(newLink);
}

function removeSearch() {
  document.querySelector(".blog-header a svg").remove();
}

function changeJumboBG() {
  const jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.cssText = "background-color: blue !important";
}

function changeMainTitleColour() {
  const mainTitle = document.querySelector("h1");
  mainTitle.style.color = "white";
}

function changeColumnSize() {
  const postHeadings = document.querySelectorAll(".blog-post-title");
  postHeadings.forEach((e) => e.classList.add("col-4"));
}

function removeLinks() {
  const elsewhereLinks = document.querySelectorAll(
    ".blog-sidebar div:nth-child(3) li"
  );
  elsewhereLinks.forEach((e) => e.remove());
}

function removeChars() {
  const allParagraphs = document.querySelectorAll(
    ".blog-post p.blog-post-meta + p"
  );
  allParagraphs.forEach((e) => {
    e.innerText = e.innerText.slice(50);
  });
}

function addNewer() {
  const newerButton = document.querySelector(".blog-pagination a:nth-child(2)");
  const blogMain = document.querySelector(".blog-main");
  const pagination = document.querySelector(".blog-pagination");

  function addNewPost() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("blog-post");

    let newTitle = document.createElement("h2");
    newTitle.innerText = "This is a new post";
    newTitle.classList.add("blog-post-title");

    newDiv.appendChild(newTitle);
    blogMain.appendChild(newDiv);
    blogMain.appendChild(pagination);
  }

  newerButton.classList.remove("disabled");
  newerButton.addEventListener("click", addNewPost);
}

function addOlder() {
  const olderButton = document.querySelector(".blog-pagination a:nth-child(1)");

  function removeLast() {
    const allPosts = document.querySelectorAll(".blog-post");
    allPosts[allPosts.length - 1].remove();
  }

  olderButton.addEventListener("click", removeLast);
}

function authorAlert() {
  const authorLinks = document.querySelectorAll(".blog-post-meta a");

  authorLinks.forEach((e) => {
    e.addEventListener("mouseover", alertA);
  });

  function alertA() {
    alert("The author is: " + event.target.innerText);
  }
}
