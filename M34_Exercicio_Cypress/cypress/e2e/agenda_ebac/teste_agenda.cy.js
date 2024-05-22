describe("Testes da agenda de contatos", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  //Renderização basica para verificar se o site carregou.
  it("Deve renderizar as inputs de nome, email e telefone", () => {
    cy.get("form input").should("have.length", 3);
  });

  it("Deve adicionar um contato à lista", () => {
    cy.get(".contato")
      .its("length")
      .then((originalLength) => {
        cy.get('input[placeholder="Nome"]').type("Matheus Camargo");
        cy.get('input[placeholder="E-mail"]').type("matheus@hotmail.com");
        cy.get('input[placeholder="Telefone"]').type("00 0 0000-0000");
        cy.get(".adicionar").click();

        //Verifica se a classe .contato teve uma adição para verificar a adição do contato.
        cy.get(".contato").should("have.length", originalLength + 1);
      });
  });

  it("Deve alterar um contato da lista", () => {
    cy.get(".edit").last().click();

    const dadosOriginais = {};
    const dadosAtualizados = {};

    //Capta dados em um objeto para realizar a comparação no final.
    cy.get('input[placeholder="Nome"]')
      .invoke("val")
      .then((nome) => {
        dadosOriginais.nome = nome;
      });
    cy.get('input[placeholder="E-mail"]')
      .invoke("val")
      .then((email) => {
        dadosOriginais.email = email;
      });
    cy.get('input[placeholder="Telefone"]')
      .invoke("val")
      .then((telefone) => {
        dadosOriginais.telefone = telefone;
      });

    //Altera apenas o nome, como teste
    cy.get('input[placeholder="Nome"]').clear().type("Matheus Rodrigues");

    //Capta os dados novamente para realizar a comparação com os dados originais.
    cy.get('input[placeholder="Nome"]')
      .invoke("val")
      .then((nome) => {
        dadosAtualizados.nome = nome;
      });
    cy.get('input[placeholder="E-mail"]')
      .invoke("val")
      .then((email) => {
        dadosAtualizados.email = email;
      });
    cy.get('input[placeholder="Telefone"]')
      .invoke("val")
      .then((telefone) => {
        dadosAtualizados.telefone = telefone;
      });

    cy.get(".alterar").click();

    //Verifica se os dados foram alterados.
    cy.wrap(dadosOriginais).should("not.deep.equal", dadosAtualizados);
  });

  it("Deve remover um contato", () => {
    let quantidadeAntes;

    // Obtem a quantidade de elementos que possuem a classe antes de clicar no botão.
    cy.get(".contato")
      .its("length")
      .then((quantidade) => {
        quantidadeAntes = quantidade;

        // Clique no botão de exclusão
        cy.get(".delete").last().click();
      });

    //Foi necessário adicionar devido a rapidez de execução.
    cy.wait(2000);

    // Verifica a quantidade de classes .contato após o clique de exclusão
    cy.get(".contato")
      .its("length")
      .then((quantidade) => {
        // Verifique se a quantidade de elementos com a classe foi reduzida após clicar no botão
        expect(quantidade).to.be.lessThan(quantidadeAntes);
      });
  });
});
