



let count = 0

function increment(){
    count ++
    document.getElementById("count").textContent = count
}

function save(){
    document.getElementById("pe").innerText += " (" + count + ") "
    count = 0
    document.getElementById("count").innerHTML = count
}
function decrement(){
    count --
    document.getElementById("count").innerHTML = count
}

// feels like the innerHTML, innerText and textContent is the same 