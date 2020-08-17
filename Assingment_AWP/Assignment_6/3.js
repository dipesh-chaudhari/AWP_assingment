var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    let usercomment = document.querySelector('#inid').value;

  
  const newElement = document.createElement("div");
  let clild1 = document.createElement("div")
  let clild1 = document.createElement("button")




  newElement.appendChild(clild1);
  newElement.appendChild(clild2);
  // comment box elment
  const commentBox = document.querySelector("#commentBox");

  commentBox.insertBefore(newElement, commentBox.firstChild);

 

  document.querySelector('#inid').value= '';
  
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;                                   
}