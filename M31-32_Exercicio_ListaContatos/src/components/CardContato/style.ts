import styled from 'styled-components'
import variaveis from '../../variaveis'

export const Card = styled.div`
  padding: 16px;
  border-radius: 8px;
  background-color: #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 32px 0;
  height: 180px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: ${variaveis.bgColor2};
`
export const Descricao = styled.textarea`
  font-family: 'Roboto Mono', monospace;
  color: #8b8b8b;
  height: 22px;
  font-size: 16px;
  resize: none;
  background: none;
  padding: 0;
  display: inline;
  width: 45%;
  border: none;
  margin: 24px 8px 16px 0;
`
export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #2f3640;
  margin-right: 16px;
  width: 80px;
  display: inline-block;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.btnSalvar};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.btnCancelar};
`
