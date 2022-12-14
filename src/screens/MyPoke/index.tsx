import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import HighLight from '@components/Hightlight'
import ListEmpty from '@components/ListEmpty'
import { useFocusEffect } from '@react-navigation/native'
import { getAllPokemons } from '@storage/Pokemons/getAllPokemons'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import * as S from './styles'

export const MyPoke = () => {
  const [myPokemons, setMyPokemons] = useState<string[]>()

  async function fetchPokemonStorage() {
    try {
      const data = await getAllPokemons()
      setMyPokemons(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchPokemonStorage();
  }, []));

  console.log(myPokemons)

  return (
    <S.Container>
      <Header showButton />
      <HighLight
        title='Minha PokeRub'
        subtitle='Meus Pokemons Favoritos'
      />

      {
        myPokemons &&
        <FlatList
          data={myPokemons}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              isFavorite
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty
              message='Nenhum Pokemon adcionado.'
            />
          )}
        />

      }
    </S.Container>
  )
}

