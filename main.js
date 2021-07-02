



button.addEventListener("click",function(){
    let bill = document.getElementById("bill").value;
let sb = document.getElementById("sb").value;
    let tip = document.getElementById("choose").value;
if (tip == "Great_20%") tip = 0.20;
if (tip == "Good_10%") tip = 0.1;
if (tip == "bad_2%") tip = 0.02;
  let total = (bill*tip) - (-bill);
  let bspp = total/sb;


 document.getElementById("p1").innerHTML = "total bill " + total;
 document.getElementById("p2").innerHTML = "total tip " + tip;
 document.getElementById("p3").innerHTML = "bill shared per person " + bspp;

})