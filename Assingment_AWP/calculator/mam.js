var result = 0;

function cal(para){
    let num1 = Number(document.querySelector("#num1").value);

    let num2 = Number(document.querySelector("#num2").value);

    
    if(para == sum){
        result= num1 + num2;
    }

    else if(para == min){
        result= num1 - num2;
    }

    else if(para == mul){
        result= num1 * num2;
    }

    else if(para == div){
        result= num1 / num2;
    }

    

}

function sub(){
    document.querySelector("#ans").value = result;
       
}

function clear(){
    document.querySelector("#num1").value ="";
    document.querySelector("#num2").value ="";
    document.querySelector("#ans").value ="";
}