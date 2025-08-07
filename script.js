const list = document.getElementById("infi-list");
let count = 1;

// Function to create a list item
function createListItem(num) {
  const li = document.createElement("li");
  li.textContent = `Item ${num}`;
  return li;
}

// Add initial 10 items
for (let i = 0; i < 10; i++) {
  list.appendChild(createListItem(count++));
}

// Function to load more items
function loadMoreItems() {
  for (let i = 0; i < 2; i++) {
    list.appendChild(createListItem(count++));
  }
}

// Scroll event listener
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMoreItems();
  }
});
