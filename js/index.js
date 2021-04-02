const textarea = document.getElementById("textarea");
const btnAdd = document.getElementById("btn-add");
const ideaContainer = document.getElementById("idea-container");

btnAdd.addEventListener("click", addIdea);

function addIdea() {

    if(textarea.value != "") {
        const p = document.createElement("p");
        const iEdit = document.createElement("i");
        const iDelete = document.createElement("i");
        const spanIcons = document.createElement("span");
    
        p.innerHTML = textarea.value;
    
        iEdit.classList.add("fas", "fa-edit", "text-warning");
        iDelete.classList.add("fas", "fa-trash-alt", "text-danger");
        spanIcons.appendChild(iEdit);
        spanIcons.appendChild(iDelete);
    
        p.appendChild(spanIcons);
    
        p.classList.add("text-info", "bg-dark", "p-3");
    
        ideaContainer.appendChild(p);
    
        textarea.value = "";
    
        iEdit.addEventListener("click", () => {
            //Create a textarea.
            let textarea = document.createElement('textarea');
            //Replace current node with textarea.
            p.replaceWith(textarea);
            textarea.focus();
    
            //If textarea lose focus so adding new task or leaving current task.
            textarea.addEventListener('blur', (ev) => {
    
                if (textarea.value != '') {
                    p.innerHTML = `${textarea.value}`;
                    textarea.replaceWith(p);
                    p.appendChild(spanIcons);
                } else {
    
                    textarea.replaceWith(p);
                }
    
            });
        });
        iDelete.addEventListener("click", deleteIdea);

    } else {
        alert("No puedes dejar el campo vacío. :/");
    }


}

function deleteIdea(iDelete) {
    iDelete.explicitOriginalTarget.parentNode.parentNode.remove();
}



