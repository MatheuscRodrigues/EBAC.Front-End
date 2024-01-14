const alunos = [
  {
    Nome: "Matheus",
    Nota: 9.5,
  },
  {
    Nome: "Adriene",
    Nota: 6,
  },
  {
    Nome: "Aline",
    Nota: 5.2,
  },
  {
    Nome: "Henrique",
    Nota: 10,
  },
  {
    Nome: "Daniel",
    Nota: 5.5,
  },
];

function listaAprovados() {
  const alunosAprovados = alunos.filter((nota) => {
    return nota.Nota >= 6;
  });
  console.log("Lista de alunos aprovados com notas maior ou igual a 6");

  alunosAprovados.forEach(({ Nome, Nota }) => {
    console.log(`Nome: ${Nome} - Nota: ${Nota}`);
  });
}

listaAprovados();
