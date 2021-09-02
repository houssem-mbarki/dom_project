var buttonsPlus = Array.from(document.getElementsByClassName("add"));
// console.log(buttonsPlus);

for (let btnPlus of buttonsPlus) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    total();
  });
  
}

var buttonsMinus = Array.from(document.getElementsByClassName("minus"));

for (let i = 0; i < buttonsPlus.length; i++) {
  buttonsMinus[i].addEventListener("click", function () {
    if (buttonsMinus[i].previousElementSibling.innerText > 0)
      buttonsMinus[i].previousElementSibling.innerText--;
      total();
  });
}


let trash = document.getElementsByClassName("fa-trash-alt");

for (let btnTrash of trash) {
  btnTrash.addEventListener("click", function () {
    btnTrash.parentNode.remove();
  });
}

let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {

    // heart.classList.toggle("red");

    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
};
function total(){

   let qt_array = Array.from(document.getElementsByClassName("qte"));
   let pr_array=Array.from(document.getElementsByClassName("prix"));

    var t=0;
     for(let i = 0 ; i<qt_array.length;i++){
     t+=qt_array[i].innerText*pr_array[i].innerText;
     console.log(qt_array[i]);}
     document.getElementById("totalp").innerHTML=t;
     
     
}