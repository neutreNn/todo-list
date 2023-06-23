const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



listContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
}, false);



function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.style.background = generateRandomColor();
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function generateRandomColor() {
    const hexCodes = ['#a9ff9c', '#d0abf9', '#bde0fe', '#ffdaa5'];
    let color = hexCodes[Math.floor(Math.random() * hexCodes.length)];
    return color;
}

showData();
