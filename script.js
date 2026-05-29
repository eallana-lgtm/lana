// 1. Verificação inicial: Busca o que já está no LocalStorage ou cria um array vazio se não houver nada
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

// Opcional: Se você quiser renderizar na tela os cards que já estavam salvos logo ao carregar a página:
/*
galeria.forEach(novo => {
    const cardSalvo = `
        <div class="card"> 
            <div class="letras">
                <h3>${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class="img">
                <img src="${novo.imagem}" alt="Imagem do card"/>
            </div>
        </div>`;
    colecao.innerHTML += cardSalvo;
});
*/

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    // 2. Adiciona o novo objeto dentro do array 'galeria'
    galeria.push(novo);

    // 3. Salva a lista atualizada no LocalStorage (convertendo o array para string)
    localStorage.setItem('galeria', JSON.stringify(galeria));

    // 4. Cria o HTML do novo card (removi o id="titulo" repetido da h3 para evitar IDs duplicados no HTML)
    const novoCard = `
        <div class = "card"> 
            <div class = "letras">
                <h3>${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class = "img">
                <img src="${novo.imagem}" alt="Imagem do card"/>
            </div>
        </div>
        `;

    colecao.innerHTML += novoCard;
    formulario.reset(); // limpa o formulário
});
