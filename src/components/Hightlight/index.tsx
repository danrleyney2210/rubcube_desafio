import React from 'react'
import * as S from './styles'

type Props = {
  title: string,
  subtitle: string,
}

const HighLight = ({ title, subtitle }: Props) => {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>

      <S.Subtitle>
        {subtitle}
      </S.Subtitle>
    </S.Container>
  )
}

export default HighLight