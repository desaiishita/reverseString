function reverseString() {

const txt = document.getElementById('strVal').value;
let rtn = "";

for (let i = txt.length - 1; i >= 0; i--) {
  rtn += txt[i];
}

document.getElementById("returnVal").textContent =rtn;

}

// reset values 

function resetInput(){
  document.getElementById("strVal").value = "";
  document.getElementById("returnVal").textContent = "";
}

