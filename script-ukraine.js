document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("alt-definition").addEventListener("click", () => {
        let altDefinition = "Українська козацька держава, яка виникла на теренах України внаслідок найбільшого " + 
        "козацького повстання в Речі Посполитій — Хмельниччини.";
        let textNode = document.querySelector("#changable-definition").lastChild;
        textNode.nodeValue = altDefinition;
    })
})