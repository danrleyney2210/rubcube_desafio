import React from 'react'
import * as S from './styles'


type Props = {
  message: string
}

const ListEmpty = ({ message }: Props) => {
  return (
    <S.Container>
      <S.Message>
        {message}
      </S.Message>
    </S.Container>
  )
}

export default ListEmpty