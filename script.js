const quotes = [
    "There is no such thing as failure, just lessons to be learnt on the way. - Sadhguru",
    "Do a little more of what you want to do every day, until your idea becomes what's real.",
    "Speak in such a way that others love to listen to you. Listen in such a way that others love to speak to you.",
    "We ought to walk through the rooms of our lives not looking for flaws, but looking for potential. - Ellen Goodman",
    "Perfection is not attainable, but if we chase perfection, we can catch excellence. - Vince Lombardi",
    "If you tell yourself you can't, you won't. - Dean Graziosi",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "The smallest deed is better than the greatest intention. - John Burroughs",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs"
];

// Display a random quote on page load
function displayRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("randomQuote").textContent = quotes[randomNumber];
}
displayRandomQuote();

// Add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = createTaskItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function createTaskItem(taskText) {
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => label.classList.toggle("completed");

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    return listItem;
}

// Enter name and set greeting
function editName() {
    const nameInput = document.querySelector("#name");
    const header = document.querySelector(".header");

    if (!nameInput.value.trim()) {
        alert("Please enter your name.");
        return; 
    }

    const greeting = getGreeting();
    header.textContent = `${greeting}, ${nameInput.value}.`;
    nameInput.style.display = "none"; 
    document.getElementById("editButton").style.display = "none"; 
    document.getElementById("editNameButton").style.display = "block"; 
}

function getGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning";
    if (hours < 18) return "Good afternoon";
    return "Good evening";
}

// Show input again when editing name
document.getElementById("editNameButton").onclick = function() {
    const nameInput = document.querySelector("#name");
    nameInput.style.display = "inline";
    nameInput.value = "";
    document.getElementById("editButton").style.display = "inline-block"; 
    document.getElementById("editNameButton").style.display = "none";
};

// Add goal

function addGoal() {
    const focusInput = document.getElementById("focusInput");
    const goalDisplay = document.getElementById("goalDisplay");
    const goalError = document.getElementById("goalError");
    const doneButton = document.getElementById("doneButton");
    const focusButton = document.getElementById("focusButton");

    goalError.style.display = "none"; 

    if (!focusInput.value.trim()) {
        goalError.textContent = "Please enter your main goal for today.";
        goalError.style.display = "block";
        return;
    }

    goalDisplay.textContent = `Your main goal for today is: ${focusInput.value}`;
    focusInput.value = "";
    focusInput.style.display = "none";
    doneButton.style.display = "inline-block";
    goalDisplay.style.fontSize = "2.4em";
    focusButton.style.display = "none";

    document.getElementById("goalToday").style.display = "none";
}

// Mark goal as done
function markGoalAsDone() {
    const goalDisplay = document.getElementById("goalDisplay");
    goalDisplay.classList.toggle("completed");
    alert("Great work today!");

    document.getElementById("doneButton").style.display = "none";
    document.getElementById("focusInput").style.display = "none";
    document.getElementById("focusButton").style.display = "none";
}

// Add a new quote
function addQuote() {
    const newQuoteInput = document.getElementById("newQuoteInput");
    const newQuote = newQuoteInput.value.trim();
    
    if (newQuote) {
        quotes.push(newQuote);
        document.getElementById("randomQuote").textContent = newQuote;
        newQuoteInput.value = "";
        alert("Quote added!");
    } else {
        alert("Please enter a quote.");
    }
}

// Clear all tasks
function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}

// Event listeners

document.getElementById("editButton").addEventListener("click", editName);
document.getElementById("addButton").addEventListener('click', addTask);
document.getElementById("focusButton").addEventListener("click", addGoal);
document.getElementById("doneButton").addEventListener("click", markGoalAsDone);
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
document.getElementById("clearButton").addEventListener("click", clearTasks);

// Time
let time = document.getElementById("time");
function updateTime() {
    const date = new Date();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0'); 
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    time.textContent = `${hours}:${minutes} ${ampm}`;
}

setInterval(updateTime, 1000);
updateTime();

// BG

const images = [
    'https://images.wallpapersden.com/image/download/4k-dark-sunset_a21tZ2aUmZqaraWkpJRmbmdlrWZlbWU.jpg',
    'https://cdn.wallpapersafari.com/78/8/EpfYQU.jpg',
    'https://images8.alphacoders.com/554/554063.jpg',
    'https://i.pinimg.com/originals/d4/91/6f/d4916f41aec37cc99baad7841148c31b.jpg',
    'https://wallpapercave.com/wp/wp6104073.jpg',
    'https://i.pinimg.com/originals/ca/f1/1a/caf11a43e52c187085c034cad12d1661.jpg',
    'https://s1.picswalls.com/wallpapers/2016/03/29/beautiful-nature-hd-wallpaper_042322367_304.jpg',
    'https://wallpapers.com/images/hd/lakeside-car-full-desktop-screen-hd-ffduevjvagzqhrhy.jpg',
    'https://wallpapercat.com/w/full/b/b/7/114034-1920x1080-desktop-1080p-seven-wonders-background.jpg',
    'https://wallpapercave.com/wp/wp7225067.jpg'
];

function changeBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(${randomImage})`;
}

window.onload = changeBackground;
