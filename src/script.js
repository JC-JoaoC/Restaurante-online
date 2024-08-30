$(document).ready(() => {
  cardapio.eventos.iniciar();
});

var cardapio = {};

cardapio.eventos = {
  iniciar: () => {
    cardapio.metodos.obterItensCardapio();
  },
};
cardapio.metodos = {
  obterItensCardapio: () => {
    var filtro = MENU["burgers"];
    $.each(filtro, (i, elemento) => {
      let template = cardapio.templates.item.replace(/\${img}/g, elemento.img);
      $("#itensCardapio").append(template);
    });
  },
};
cardapio.templates = {
  item: `
      <div class="col-3 mb-5">
  <div class="card card-item">
    <div class="img-produto">
      <img src="\${img}" />
    </div>
    <p class="title-produto text-center mt-4">
      <strong>Nome</strong>
    </p>
    <p class="price-produto text-center">
      <strong>R$ 99,00</strong>
    </p>
    <div class="add-carrinho">
      <span class="btn-menos"><i class="fas fa-minus"></i></span>
      <span class="add-numero-itens">0</span>
      <span class="btn-mais"><i class="fas fa-plus"></i></span>
      <span class="btn btn-add"><i class="fas fa-shopping-bag"></i></span>
    </div>
  </div>
</div>
`,
};
