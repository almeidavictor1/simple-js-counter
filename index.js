const decreaseBtn = document.getElementById("decreaseBtn");
const ResetBtnBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const CountLabel = document.getElementById("CountLabel");
let count = 0

IncreaseBtn.onclick = function(){
  count++;
  CountLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  CountLabel.textContent = count;
}
ResetBtn.onclick = function(){
  count = 0;
  CountLabel.textContent = count;
}
