let selectElement = document.getElementById("mySelect");
let checkboxContainer = document.getElementById("checkboxContainer");

selectElement.addEventListener("change", function() {

    if (selectElement.value === "show") {
        checkboxContainer.classList.remove("hidden");
    } else {
        checkboxContainer.classList.add("hidden");
    }

});

let textInput = document.getElementById("textInput");

textInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        alert("Enter key was pressed!");
    }

});
