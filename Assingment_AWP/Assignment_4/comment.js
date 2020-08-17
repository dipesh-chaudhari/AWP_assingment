var liker = 0;
var commenter = 0;

function like(){
   let newElement = document.querySelector("#like")
   liker= liker + 1;
   newElement.innerHTML = "Like " + liker; 

}

function comment(){
    let usercomment = document.querySelector("#input").value;
   let newElement = document.createElement("div");

   newElement.textContent= usercomment;

   let box = document.querySelector('#div1');

   box.appendChild(newElement);

   

   let newcount = document.querySelector("#comm")
   commenter= commenter + 1;
   newcount.innerHTML = "Comment " + commenter;

   document.querySelector("#input").value="";
   
   
}
