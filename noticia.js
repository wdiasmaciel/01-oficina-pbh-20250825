function lerNoticias() {
    dados.forEach(item => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";
        cartao.innerHTML = `
           <img src="${item.imagem}" alt="${item.titulo}" class="imagem">
        `;

    }); 
}