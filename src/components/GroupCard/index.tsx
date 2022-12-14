import React from 'react'
import * as S from './styles'
import pokebola from '@assets/pokebola3.png'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string;
  id?: number;
  isFavorite?: boolean
}

export const GroupCard = ({ title, id, isFavorite, ...rest }: Props) => {
  return (
    <S.Container {...rest}>
      {
        isFavorite ? (
          <S.PokemonImage source={pokebola} />
        ) : (
          <S.PokemonImage
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }}
          />
        )
      }
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

