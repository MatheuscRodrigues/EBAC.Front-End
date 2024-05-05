import styled from 'styled-components'
import variaveis from '../../variaveis'
import { InputBusca, LabelBusca } from '../FormularioBusca/style'

export const FormCadastro = styled.form`
  margin-top: 12px;
`

export const LabelCadastro = styled(LabelBusca)`
  color: ${variaveis.bgColor2};
  font-size: 16px;
`
export const InputCadastro = styled(InputBusca)`
  margin: 4px 0 12px 0;
`

export const BtnCadastro = styled.button`
  padding: 12px;
  background-color: ${variaveis.bgColor2};
  border: none;
  border-radius: 4px;
  color: ${variaveis.bgColor3};
  cursor: pointer;
`
