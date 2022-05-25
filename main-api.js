
const rifToggler = displayToggle => {

    document.getElementById("rif-spiner").style.display = displayToggle;
}

const TogglerResult = resultToggle => {

    document.getElementById("toggleResult").style.display = resultToggle;
}

document.getElementById("books-search").addEventListener("click", function(){
   
    // Display On Spiner
    rifToggler ("block");
    TogglerResult("none");

    const textInput = document.getElementById("books-input");
    const textInputData = textInput.value;
    textInput.value = "";
    console.log(textInputData)

    fetch(`https://openlibrary.org/search.json?q=${textInputData}`)
    .then(res => res.json())
    .then(data => bookshows(data))

})

// Api in DOM


function bookshows (books){
console.log(books)

const resultShow = document.getElementById("result-books");
resultShow.innerHTML = ` 
<div class="text-center col-sm-12 text-bg-primary" >
<h2 class="mb-3 number-title"> Total Result found ::  ${books.numFound}</h2>
</div>
`

for (const book of books.docs){

const div = document.createElement("div");
    div.classList.add("col-sm-6");
    div.style.marginBottom = "30px"
    div.innerHTML = ` 
    <div class="card">
    <div class="card-body">
        <div class="text-center">
        <a href=" https://openlibrary.org${ book.key}" ><img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="rounded img-fluid mb-3" alt="${book.title}"></a>
        </div>
         <h5 class="card-title ">${book.title}</h5>
        <p class="card-text text-uppercase my-2 fw-bold">${book.author_name}</p>
        <p class="card-text text-uppercase">${book.first_publish_year}</p>
        <a href=" https://openlibrary.org${ book.key}" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `;
resultShow.appendChild(div);
}
    // Display On Spiner
    rifToggler ("none");
    TogglerResult("block");


};


