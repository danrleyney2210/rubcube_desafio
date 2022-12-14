import React from 'react'
import * as S from './styles'


type Props = {
  message: string
}

const ListEmpry = ({ message }: Props) => {
  return (
    <S.Container>
      <S.Message>
        {message}
      </S.Message>
    </S.Container>
  )
}

export default ListEmpry