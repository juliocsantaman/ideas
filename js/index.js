const textarea = document.getElementById("textarea");
const btnAdd = document.getElementById("btn-add");
const ideaContainer = document.getElementById("idea-container");

btnAdd.addEventListener("click",  addIdea);

function addIdea() {
    const p = document.createElement("p");
    const i = document.createElement("i");

    p.innerHTML = textarea.value;

    i.classList.add("fas", "fa-edit");

    // <i class="fas fa-edit"></i>

    p.appendChild(i);

    p.classList.add("text-info", "bg-dark", "p-3");

    ideaContainer.appendChild(p);

    textarea.value = "";

}

