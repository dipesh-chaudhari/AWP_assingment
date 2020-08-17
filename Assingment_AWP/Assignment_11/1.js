

window.addEventListener("load", () =>{
    const box = document.querySelector("#idbox");
        console.log(box)  


    let list = [
        { id : 1, post : "Dipesh" },
        { id : 2, post : "Dip" },
        { id : 3, post : "D1" },
        { id : 4, post : "Pratham" },
        { id : 5, post : "akshay" },
        { id : 6, post : "onkar" },
        { id : 7, post : "vishvjit" },
        { id : 8, post : "sohan" },
        { id : 9, post : "abhijeet" },
        { id : 10, post : "vipul" },
        { id : 11, post : "vineeta" },
    ];

    for(let i=0; i < list.length; i++){
       
   

    const newElement = box.children[0].cloneNode(true);
    newElement.style.display = "flex";

    newElement.children[0].innerHTML=list[i].id + list[i].post;

    box.insertBefore(newElement, box.firstchild);

}


} );