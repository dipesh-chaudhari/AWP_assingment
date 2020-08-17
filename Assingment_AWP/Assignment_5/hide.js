function hide(){
    let newele = document.querySelector("#para");
    if( newele.style.display != 'none')
    newele.style.display = 'none';
    else
    newele.style.display = 'block';
}


function movein(){
let paraa = document.querySelector("#para");
paraa.style.color='red';
}

function moveout(){
    let paraa = document.querySelector("#para");
    paraa.style.color="black";
    }
