let addBook = document.querySelector(".add");
let form = document.querySelector("#form")
let container = document.querySelector(".container")
console.log(container);
addBook.addEventListener("click", () => {
    form.style.display = "block"
})
let listOfBook = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const book1 = new Book(form.title.value, form.author.value, form.pages.value)
    //  console.log(book1.author)
    listOfBook.push(book1)
    // console.log(book1);
    // console.log(listOfBook);
    newCard(listOfBook.length - 1);
    document.getElementById("form").reset();
    form.style.display = " none"

})
function newCard(index) {

    let card = document.createElement("div");
    card.setAttribute("class", "cards");
    container.appendChild(card)

    let para = document.createElement("p");
    para.textContent = listOfBook[index].title;
    card.appendChild(para);
    console.log(card);
    

    let para1 = document.createElement("p");
    para1.textContent = listOfBook[index].author;
    card.appendChild(para1);
    console.log(para1);
    

    let para2 = document.createElement("p");
    para2.textContent = listOfBook[index].pages;
    card.appendChild(para2);
    console.log(card);

    let readButton = document.createElement("button")
    readButton.setAttribute("class", "read")
    readButton.textContent = "Read"
    readButton.style.backgroundColor = "pink";
    card.appendChild(readButton)
   
    let clicked = false
    readButton.addEventListener("click", () => {
        if (!clicked) {
            readButton.textContent = " Not Read"
            readButton.style.background = "red"
            clicked = true;
        }
        else {
            readButton.textContent = "Read"
            readButton.style.background = ""
            clicked = false;
        }

    })



    let remove = document.createElement("button")
    remove.setAttribute("class","remove")
    remove.textContent = "remove"
    remove.style.backgroundColor = "green";
    card.appendChild(remove)
    container.appendChild(card)

    remove.addEventListener("click", () => {
        container.removeChild(card)
    })

}


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.printBookDetails = function () {
        console.log(` ${title}  ${author}  ${pages}`)
    }
}
