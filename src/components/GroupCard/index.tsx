import React from 'react'
import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'


type Props = TouchableOpacityProps & {
  title: string;
  id: number
}

export const GroupCard = ({ title, id, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      <S.PokemonImage
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        }}
      />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

