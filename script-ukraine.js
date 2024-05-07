document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("alt-definition").addEventListener("click", () => {
        let altDefinition = "Українська козацька держава, яка виникла на теренах України внаслідок найбільшого " + 
        "козацького повстання в Речі Посполитій — Хмельниччини.";
        let textNode = document.querySelector("#changable-definition").lastChild;
        textNode.nodeValue = altDefinition;
    })
    let eventHandler =  {
        handleEvent(event) {
            alert(event.currentTarget);
        }
    }
    document.querySelector(".good-article").addEventListener("click", eventHandler);
    document.querySelector('.regions-list').addEventListener("click", (event) => {
        let target = event.target;
        if (target.tagName == "li") {
            target.style.color = "red";
            target.style.fontSize = "1.5em";
        }
    })
    class Menu {
        constructor(element) {
            this.element = element;
            element.onclick = this.onClick.bind(this);
        }
        praise() {
            alert("Дякуємо!");
        }
        review() {
            prompt("Ваш відгук:", "")
        }
        unmark() {
            let confirmation = confirm("Ви дійсно бажаєте зняти відмітку зі сторінки?");
            if (confirmation) {
                document.querySelector(".good-article").remove();
            }
        }
        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        }
    }
    new Menu(actions);
    document.addEventListener("click", (event) => {
        if (event.target.dataset.enlargable != undefined) {
            let image = event.target;
            let width = image.offsetWidth;
            let height = image.offsetHeight;
            image.style.width = `${Math.ceil(width*1.25)}px`;
            image.style.height = `${Math.ceil(height*1.25)}px`;
        }
    })
})