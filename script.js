const container = document.querySelector(".gridContainer");

function changeColor(div, color){
    div.style.backgroundColor = color;
}
function createPad(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.classList.add('row');
        for(let j = 0; j < size; j++){
            const box = document.createElement("div");
            box.classList.add('box'); 
            box.style.height = `${500/size}px`; 
            box.style.width = `${500/size}px`; 
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", function(){
            changeColor(box, "red");
        })
    })
}

createPad(16);



function changePadSize(){
    let userChoice = prompt("Enter the size(Max is 100, Min is 2)");
    if(userChoice>100||userChoice<2){
        alert("R u idiot? Try again");
        return;
    }
    removePad();
    createPad(userChoice);
}

function removePad(){
    while(container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }
}

function clearPad(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
            changeColor(box, "white");
    })
}
function erase(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", function(){
            changeColor(box, "white");
        })
    })
}
function color(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("mouseover", function(){
            changeColor(box, "red");
        })
    })
}