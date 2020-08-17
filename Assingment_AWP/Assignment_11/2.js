window.addEventListener("load", () => {
    
    let listpost=[
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

    let idbox = document.querySelector("#idbox");

    for(let i=0; i< listpost.length; i++){

        let newElelement = idbox.children[0].cloneNode(true);
        newElelement.style.display= "flex";

        newElelement.children[0].innerHTML= listpost[i].post;

        idbox.insertBefore(newElelement, idbox.firstChild);

    }


});