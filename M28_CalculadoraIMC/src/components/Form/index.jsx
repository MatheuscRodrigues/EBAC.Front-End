import { useState } from "react";
import { mask, unmask } from "remask";
import styles from "./styles.module.css";

const Form = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultadoIMC, setResultadoIMC] = useState("");
  const [condicoesDestaque, setCondicoesDestaque] = useState([]);

  const mascaraAltura = (event) => {
    const novaAltura = mask(unmask(event.target.value), "9,99");
    setAltura(novaAltura);
  };

  const mascaraPeso = (event) => {
    const novoPeso = mask(unmask(event.target.value), ["9,99", "99,99", "999,99"]);
    setPeso(novoPeso);
  };

  const calculoIMC = () => {
    //Converte os dados para tipo number e tambem altera a , por . para poder realizar o calculo correto
    const alturaNumero = parseFloat(altura.replace(",", "."));
    const pesoNumero = parseFloat(peso.replace(",", "."));

    //Lógica simples para ocultar o NaN quando nao há número digitado, não utilizei a propria função NaN pois a mascara não permite outro tipo de entrada a não ser números, e também a conversão já foi realiza anteriormente com o parseFloat.
    if (pesoNumero > 0 && alturaNumero > 0) {
      const valorIMC = (pesoNumero / alturaNumero ** 2).toFixed(2);
      setResultadoIMC(valorIMC.replace(".", ","));

      setCondicoesDestaque([
        { id: 1, destaque: parseFloat(valorIMC) < 16.9 },
        { id: 2, destaque: parseFloat(valorIMC) >= 17 && parseFloat(valorIMC) < 18.5 },
        { id: 3, destaque: parseFloat(valorIMC) >= 18.5 && parseFloat(valorIMC) < 25 },
        { id: 4, destaque: parseFloat(valorIMC) >= 25 && parseFloat(valorIMC) < 30 },
        { id: 5, destaque: parseFloat(valorIMC) >= 30 && parseFloat(valorIMC) < 35 },
        { id: 6, destaque: parseFloat(valorIMC) >= 35 && parseFloat(valorIMC) <= 40 },
        { id: 7, destaque: parseFloat(valorIMC) > 40 },
      ]);
    } else {
      setResultadoIMC(" ");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label>Digite a altura:</label>
        <input type="text" onChange={mascaraAltura} value={altura} />

        <label>Digite o peso:</label>
        <input type="text" onChange={mascaraPeso} value={peso} />

        <div className={styles.buttonDiv}>
          <button onClick={calculoIMC}>Calcular</button>
        </div>

        <div className={styles.resultado}>{resultadoIMC && <h2>Seu IMC: {resultadoIMC}</h2>}</div>
      </div>

      <table className={styles.tabelaIMC}>
        <div className={styles.centralizarTabela}>
          <thead>
            <tr>
              <td>Tabela de Interpretação do IMC</td>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.colunas}>
              <td>IMC</td>
              <td>Classificação</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 1)?.destaque ? styles.colunaRealce : ""}
            >
              <td>Menor que 16,9</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 2)?.destaque ? styles.colunaRealce : ""}
            >
              <td>17 a 18,4</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 3)?.destaque ? styles.colunaRealce : ""}
            >
              <td>18,5 a 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 4)?.destaque ? styles.colunaRealce : ""}
            >
              <td>25 a 29,9</td>
              <td>Acima do peso</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 5)?.destaque ? styles.colunaRealce : ""}
            >
              <td>30 a 34,9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 6)?.destaque ? styles.colunaRealce : ""}
            >
              <td>35 a 40</td>
              <td>Obesidade grau II</td>
            </tr>
            <tr
              className={condicoesDestaque.find((condicao) => condicao.id === 7)?.destaque ? styles.colunaRealce : ""}
            >
              <td>Maior que 40</td>
              <td>Obesidade grau III</td>
            </tr>
          </tbody>
        </div>
      </table>
    </div>
  );
};

export default Form;
