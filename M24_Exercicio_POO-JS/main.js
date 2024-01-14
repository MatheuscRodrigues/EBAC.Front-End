// Função construtora
function Veiculo(modelo, tipo, cor) {
  this.modelo = modelo;
  this.tipo = tipo;
  this.cor = cor;
}

//Funções construtoras herdeiras de Veiculo()
function Motorizados(placa, modelo, tipo, cor) {
  Veiculo.call(this, modelo, tipo, cor);

  let _placa = placa; //Encapsulamento de informações importantes

  this.descricao = function () {
    console.log(`Automóvel Placa: ${_placa}. Modelo: ${this.modelo}. Tipo: ${this.tipo}. Cor: ${this.cor}.`);
  };
}

function Bicicletas(id, modelo, tipo, cor) {
  Veiculo.call(this, modelo, tipo, cor);

  let _id = id; //Encapsulamento de informações importantes

  this.descricao = function () {
    console.log(`Bicicleta ID: ${_id}. Modelo: ${this.modelo}. Tipo: ${this.tipo}. Cor: ${this.cor}.`);

    //Método para alteração de caracteristicas de uma bicicleta associada a um ID
    this.modelAtt = function (novoModelo, novoTipo, novaCor) {
      this.modelo = novoModelo;
      this.tipo = novoTipo;
      this.cor = novaCor;
      console.log(
        `Bicicleta ID: ${_id} teve suas caracteristas alteradas. Novo Modelo: ${novoModelo}. Novo Tipo: ${novoTipo}. Nova Cor: ${novaCor}.`
      );
    };
  };
}

//Instâncias de objetos
const motorizado1 = new Motorizados("AAA-1A111", "Gol", "Carro", "Prata");
const motorizado2 = new Motorizados("BBB-1A111", "CG 160", "Moto", "Vermelha");
const bicicleta1 = new Bicicletas(12345, "Caloi 10", "Speed", "Preta");

//Chamando métodos das instâncias
motorizado1.descricao();
motorizado2.descricao();
bicicleta1.descricao();

bicicleta1.modelAtt("Sense Rock EVO", "Mountain-bike", "Azul");
