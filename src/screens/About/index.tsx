import { Header } from '@components/Header'
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Alert, Text } from 'react-native'
import pokeApi from '@services/index'
import Button from '@components/Button'
import { addPokemon } from '@storage/Pokemons/pokemons'
import { AppError } from '@utils/AppError'

type RouteParams = {
  pokemonId: number
}

type Stats = {
  base_stat: 62,
  stat: {
    name: string
  }
}

type Abilities = {
  ability: {
    name: string
  }
}

type PokemonType = {
  type: {
    name:
    | 'grass'
    | 'fire'
    | 'water'
    | 'poson'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground'
  }
}

type PokemonProps = {
  id: number,
  name: string,
  height: number,
  weight: number,
  stats: Stats[],
  abilities: Abilities[],
  types: PokemonType[]
}

export const About = () => {
  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [load, setLoad] = useState(true)
  const { goBack } = useNavigation()

  const route = useRoute()
  const { pokemonId } = route.params as RouteParams;

  async function handleAdd() {
    try {
      await addPokemon(pokemon.name)
      goBack()

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(error.message)
      } else {
        Alert.alert('não foi possível adcionar este pokemon.')
        console.log(error)
      }
    }
  }

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const response = await pokeApi.get(`/pokemon/${pokemonId}`)
        const { stats, abilities, id, name, types, weight, height } = response.data;
        // console.log('Altura: ', height)
        // const currentType = types[0].types.name
        setPokemon({
          stats, abilities, id, name, types, weight, height
        })
      } catch (error) {
        Alert.alert('Ops, ocorreu algum erro')
      } finally {
        setLoad(false)
      }
    }

    getPokemonDetails()
  }, [])
  return (
    <>
      {
        load ? (
          <S.Container>
            <Text>Loading...</Text>
          </S.Container>
        ) : (
          <S.Container>
            <Header showButton />

            <S.Content>
              <S.contentImage>
                <S.PokemonImage
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
                  }}
                />
              </S.contentImage>


              <S.ContentText>
                <S.Title>Nome: <S.Subtitle>{pokemon.name}</S.Subtitle></S.Title>
                <S.Title>Tipo: <S.Subtitle>{pokemon.types[0].type.name}</S.Subtitle></S.Title>
                <S.Title>Altura: <S.Subtitle>{pokemon.height}</S.Subtitle></S.Title>
                <S.Title>Peso: <S.Subtitle>{pokemon.weight}</S.Subtitle></S.Title>


                {pokemon.abilities.map((currentbility, idx) => <S.Title>
                  Habilidade {idx + 1}: <S.Subtitle>{currentbility.ability.name}</S.Subtitle>
                </S.Title>)}
              </S.ContentText>
            </S.Content>

            <Button
              title='Adcionar na minha PokeRube'
              onPress={handleAdd}
            />
          </S.Container>
        )
      }
    </>

  )
}

