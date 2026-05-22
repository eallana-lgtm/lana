const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        //descricaoIm: document.getElementById('descricao').value,
        texto: document.getElementById('paragrafo').value
    };

    const novoCard = `
        <div class = "card"> 
            <div class = "letras>
                <h3 id="titulo">${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class = "img">
                <img src="${novo.imagem}" alt="${novo.descricaoIm}"/>
            </div>
        </div>
        `;//Injetar no nosso código html


    colecao.innerHTML += novoCard;
    formulario.reset(); //limpa o formulario

    });

    function fazerFruta(fruta){
        const resultado = "Suco de "+ fruta;
        return resultado;
    }

    const meuCopo = fazerFruta('banana');
    console.log(meuCopo);
