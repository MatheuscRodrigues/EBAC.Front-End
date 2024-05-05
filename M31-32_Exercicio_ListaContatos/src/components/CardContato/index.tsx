import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatosClass from '../../models/ContatosClass'
import { remover, editar } from '../../store/reducers/contatosReducers'

import * as S from './style'
import { mask, unMask } from 'remask'

type Props = ContatosClass

const Contato = ({
  nome,
  contato: contatoOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')

  //Funções de alteração
  function cancelarEdicao() {
    setEstaEditando(false)
    setContato(contatoOriginal)
    setEmail(emailOriginal)
  }

  function alterarDescricao() {
    dispatch(
      editar({
        id,
        nome,
        contato,
        email
      })
    )
    setEstaEditando(false)
  }

  //Carregando a descrição original
  useEffect(() => {
    if (contatoOriginal.length > 0) {
      setContato(contatoOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [contatoOriginal, emailOriginal])

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Descricao
        disabled={!estaEditando}
        value={contato}
        onChange={(e) =>
          setContato(
            mask(unMask(e.target.value), ['(99) 9999-9999', '(99) 99999-9999'])
          )
        }
      ></S.Descricao>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></S.Descricao>
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={alterarDescricao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Contato
