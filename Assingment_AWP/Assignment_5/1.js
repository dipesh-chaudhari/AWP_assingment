
function handleMouseOver(){
    console.log("I have succesfully call")
    var id2Element = document.querySelector(".class_2");
    id2Element.style.background= "black"
    id2Element.style.color= "red"

    id2Element.innerHTML= "Hello Pratham"
}

function handleMouseOut(){
    
    var id2Element = document.querySelector("#id2");
    id2Element.style.background= "tomato"
    id2Element.style.color= "blue"

    id2Element.innerHTML= "Hello World"
}