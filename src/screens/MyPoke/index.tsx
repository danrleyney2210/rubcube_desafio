import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import HighLight from '@components/Hightlight'
import ListEmpry from '@components/ListEmpty'
import { useFocusEffect } from '@react-navigation/native'
import { getAllPokemons } from '@storage/Pokemons/getAllPokemons'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import * as S from './styles'

export const MyPoke = () => {
  const [myPokemons, setMyPokemons] = useState()

  async function fetchPokemonStorage() {
    try {
      const data = await getAllPokemons()
      setMyPokemons(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    console.log('executou')
    fetchPokemonStorage();
  }, []));

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
          keyExtractor={item => item.name}
          // contentContainerStyle={myPokemons.length === 0 && { flex: 1 }}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              id={item.id}
            // onPress={() => handleNavigate(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpry
              message='xxxx'
            />
          )}
        />
      }
    </S.Container>
  )
}

