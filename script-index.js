addEventListener("DOMContentLoaded", () => {
    userDialog();
    document.getElementById("dev-info").addEventListener("click", () => {
        getDeveloperInfo("Удод", "Назар");
    });
    document.querySelector(".string-comparison > button").addEventListener("click", () => {
        stringComparison(document.getElementById("string-1").value, document.getElementById("string-2").value);
    });
    document.getElementById("change-color").addEventListener("click", changeColor);
    document.getElementById("remove-formatting").addEventListener("click", () => {
        let rawText = document.getElementById("removable-formatting").textContent;
        document.getElementById("removable-formatting").innerHTML = rawText;
    })
});

function userDialog() {
    document.getElementById("confirm-button").addEventListener("click", dialogStart);
}
function dialogStart() {
    let likeOrNot = document.querySelector("input[name='like-or-not']:checked").value;
        if (likeOrNot == "yes") {
            document.querySelector(".user-dialog > p").innerHTML = "Дякуємо!";
            document.getElementById("like-or-not").remove();
            document.getElementById("confirm-button").remove();
        }
        else {
            document.querySelector(".user-dialog > p").innerHTML = "Введіть кількість зауважень, які ви маєте:";
            let numberOfRemarksForm = document.createElement("form");
            numberOfRemarksForm.id = "number-of-remarks-form";
            let numberOfRemarksField = document.createElement("input");
            numberOfRemarksField.type = "text";
            numberOfRemarksField.id = "number-of-remarks-field";
            numberOfRemarksForm.append(numberOfRemarksField);
            document.getElementById("like-or-not").replaceWith(numberOfRemarksForm);
            document.getElementById("confirm-button").removeEventListener("click", dialogStart);
            document.getElementById("confirm-button").addEventListener("click", createFields);
        }
}
function createFields() {
    let numberOfRemarks = document.getElementById("number-of-remarks-field").value;
    if (isNaN(numberOfRemarks)) {
        document.querySelector(".user-dialog > p").innerHTML = "Невірні дані, повторіть!";
    }
    else {
        document.querySelector(".user-dialog > p").innerHTML = "Введіть зауваження";
        let remarksForm = document.createElement("form");
        remarksForm.id = "remarks-form";
        for (let i = 1; i <= numberOfRemarks; i++) {
            let remarkField = document.createElement("input");
            remarkField.type = "text";
            remarksForm.prepend(remarkField);
        }
        document.getElementById("number-of-remarks-form").replaceWith(remarksForm);
        document.getElementById("confirm-button").removeEventListener("click", createFields);
        document.getElementById("confirm-button").addEventListener("click", reviewGratitude);
    }
}
function reviewGratitude() {
    document.querySelector(".user-dialog > p").innerHTML = "Дякуємо за відгук!";
    document.getElementById("remarks-form").remove();
    document.getElementById("confirm-button").outerHTML = "";
}

function getDeveloperInfo(surname, name, post="Студент гр. ІС-22") {
    let devInfo = document.createTextNode(`Створив ${surname} ${name}, ${post}.`);
    document.getElementById("dev-info").after(devInfo);
}

function stringComparison(string1, string2) {
    let largerString;
    largerString = string1.toString() > string2.toString() ? string1 : string2;
    alert(`Більший рядок: ${largerString}`);
}

function changeColor() {
    document.body.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000)
}