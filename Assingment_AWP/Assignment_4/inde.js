var counter = 1;

function increment(){
 let newElement = document.querySelector("#num")
counter = counter + 1;
 
newElement.innerHTML= counter;

}

function decrement(){
    let newElement = document.querySelector("#num")
counter = counter - 1;
 
newElement.innerHTML= counter;

} 
