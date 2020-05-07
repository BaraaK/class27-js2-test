const books = [
    {
          bookName: "The Nature of Software Development",
          author: "Ron Jeffries",
          coverURL:
                "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
          bookName: "Clean Code",
          author: "Robert Cecil Martin",
          coverURL:
                "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
];

const div = document.getElementById('#root');
let list = document.createElement('ul');
div.appendChild(list);
const listItem = document.createElement('li');
listItem.innerHTML = "hello";
list.appendChild(listItem);
function injectBooksToDOM (books) {
  books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.innerHTML = book;
      list.appendChild(listItem);
  });

}
