import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'


type Props = TouchableOpacityProps & {
  title: string,
  type?: S.ButtonTypeStyleProps
}

const Button = ({ title, type = 'PRIMARY', ...rest }: Props) => {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default Button