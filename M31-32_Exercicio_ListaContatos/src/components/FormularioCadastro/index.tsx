import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/contatosReducers'

import { ContainerBusca, LabelBusca } from '../FormularioBusca/style'
import {
  BtnCadastro,
  FormCadastro,
  InputCadastro,
  LabelCadastro
} from './style'
import { FormEvent, useState } from 'react'
import Contatos from '../../models/ContatosClass'
import { mask, unMask } from 'remask'

const FormularioCadastro = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new Contatos(1, nome, contato, email)
    setNome('')
    setContato('')
    setEmail('')

    dispatch(adicionar(contatoParaAdicionar))
  }

  return (
    <ContainerBusca>
      <LabelBusca>Cadastro de Contatos</LabelBusca>
      <FormCadastro onSubmit={cadastrarContato}>
        <LabelCadastro htmlFor="nome">Nome Completo</LabelCadastro>
        <InputCadastro
          placeholder="Nome e Sobrenome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <LabelCadastro htmlFor="contato">Contato</LabelCadastro>
        <InputCadastro
          placeholder="Digite o telefone com DDD"
          id="contato"
          value={contato}
          onChange={(e) =>
            setContato(
              mask(unMask(e.target.value), [
                '(99) 9999-9999',
                '(99) 99999-9999'
              ])
            )
          }
        />
        <LabelCadastro htmlFor="email">Endereço de e-mail</LabelCadastro>
        <InputCadastro
          placeholder="Seu melhor endereço de e-mail"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BtnCadastro>Cadastrar</BtnCadastro>
      </FormCadastro>
    </ContainerBusca>
  )
}

export default FormularioCadastro
