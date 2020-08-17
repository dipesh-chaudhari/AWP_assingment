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

            let child1 = document.createElement("div");
                    child1.textContent= usercomment;

            let child2 = document.createElement("button");
                    child2.textContent= "Delete";

   newElement.appendChild(child1);
   newElement.appendChild(child2);

   const box = document.querySelector('#parent');

   box.appendChild(newElement);

   



   

   let newcount = document.querySelector("#comm")
   commenter= commenter + 1;
   newcount.innerHTML = "Comment " + commenter;

   document.querySelector("#input").value="";
   
   
}
