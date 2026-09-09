const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const descricaoInput = document.getElementById("description-tarefa");
const lista = document.getElementById("lista-tarefas");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = input.value.trim();
    const descricao = descricaoInput.value.trim(); // <textarea> => .value, não .textContent
    if (texto === "") return;

    const item = document.createElement("li");

    const linha = document.createElement("div");
    linha.className = "tarefa-linha";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const titulo = document.createElement("span");
    titulo.className = "tarefa-titulo";
    titulo.textContent = texto;

    linha.appendChild(checkbox);
    linha.appendChild(titulo);
    item.appendChild(linha);

    if (descricao !== "") {
        const desc = document.createElement("p");
        desc.className = "tarefa-descricao";
        desc.textContent = descricao;
        item.appendChild(desc);
    }

    lista.appendChild(item);
    input.value = "";
    descricaoInput.value = "";
    input.focus();
});

lista.addEventListener("click", function (evento) {
    if (evento.target.matches("input[type='checkbox']")) {
        evento.target.closest("li").classList.toggle("concluida", evento.target.checked);
        return;
    }

    const item = evento.target.closest("li");
    if (item) item.remove();
});
