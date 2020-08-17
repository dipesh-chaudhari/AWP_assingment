
let btnlike = function (btnlikepar) {
    let likecount = btnlikepar.children[0].innerHTML;

    let likecounter = parseInt(likecount);

    likecounter++;

    btnlikepar.children[0].innerHTML = likecounter;
    
};

let btncomment = function (btncompar) {

    let sample = btncompar.parentElement.parentElement.parentElement.children[3];

    //console.log(sample);
    
    let sampleclone = sample.children[0].cloneNode(true);
    sampleclone.style.visibility = "visible";

    let input = btncompar.parentElement.parentElement.children[1].children[0];

    //console.log(input);

    sampleclone.children[0].innerHTML = input.value;

    input.value = "";

    sample.insertBefore(sampleclone, sample.firstchild);
};

let btndelete = function (btndelpar) {
    btndelpar.parentElement.parentElement.remove();
    
};