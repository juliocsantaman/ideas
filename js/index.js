const textarea = document.getElementById("textarea");
const btnAdd = document.getElementById("btn-add");
const ideaContainer = document.getElementById("idea-container");

btnAdd.addEventListener("click",  addIdea);

function addIdea() {
    const p = document.createElement("p");
    const iEdit = document.createElement("i");
    const iDelete = document.createElement("i");
    const spanIcons = document.createElement("span");

    p.innerHTML = textarea.value;

    iEdit.classList.add("fas", "fa-edit");
    iDelete.classList.add("fas", "fa-trash-alt");
    spanIcons.appendChild(iEdit);
    spanIcons.appendChild(iDelete);

    // <i class="fas fa-edit"></i>
    // <i class="fas fa-trash-alt"></i>

    // p.appendChild(iEdit);
    // p.appendChild(iDelete);

    p.appendChild(spanIcons);

    p.classList.add("text-info", "bg-dark", "p-3");

    ideaContainer.appendChild(p);

    textarea.value = "";

}

