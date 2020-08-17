function commentHere(){

    let newElement = document.createElement("div");
    newElement.textContent ="comment";
    newElement.style.background="gray";
    newElement.style.margin="4px";

    let commentParent = document.querySelector('#commentBox');
    commentParent.appendChild(newElement);
}