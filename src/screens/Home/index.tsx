import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import * as S from './styles'

import Button from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import HighLight from '@components/Hightlight';
import ListEmpty from '@components/ListEmpty';
import pokeApi from '@services/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '@components/Input';

type pokemonType = {
  type: string
}

type pokemon = {
  name: string,
  url: string
  id: number,
  types: pokemonType[]
}

type Request = {
  id: number,
  types: pokemonType[]
}

export function Home() {
  const [pokemons, setPokemons] = useState<pokemon[]>([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<pokemon[]>([])

  const { navigate }: any = useNavigation()

  const getPoke = async () => {
    const response = await pokeApi.get('/pokemon')
    const { results } = response.data;

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url)

        return {
          name: pokemon.name,
          id,
          types
        }
      })
    )

    setPokemons(payloadPokemons)


  }

  const getMoreInfo = async (url: string): Promise<Request> => {
    const response = await pokeApi.get(url)
    const { id, types } = response.data

    return {
      id, types
    }
  }

  const handleNavigate = (pokemonId: number) => {
    navigate('About', {
      pokemonId,
    })
  }

  const handleMyPoke = () => {
    navigate('MyPoke')
  }

  const filterPokemon = (name: string) => {
    const result = pokemons.filter(
      (pokemon) =>
        pokemon.name.toUpperCase().includes(search.toUpperCase())
    )
    console.log(result)
    setFilter(result)
  }

  useEffect(() => {
    getPoke()
  }, [])

  useEffect(() => {
    filterPokemon(search)
  }, [search])


  return (
    <S.Container>
      <Header />
      <HighLight
        title='PokeRub'
        subtitle='Recube Front-end'
      />

      <Input
        placeholder='Pesquise seu Pokemon'
        value={search}
        onChangeText={text => setSearch(text)}
      />

      {
        search.length > 0 ? (
          <FlatList
            data={filter}
            keyExtractor={item => item.name}
            contentContainerStyle={filter.length === 0 && { flex: 1 }}
            renderItem={({ item }) => (
              <GroupCard
                title={item.name}
                id={item.id}
                onPress={() => handleNavigate(item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty
                message='Nenhum Pokemon encontrado'
              />
            )}
          />
        ) : (
          <FlatList
            data={pokemons}
            keyExtractor={item => item.name}
            contentContainerStyle={pokemons.length === 0 && { flex: 1 }}
            renderItem={({ item }) => (
              <GroupCard
                title={item.name}
                id={item.id}
                onPress={() => handleNavigate(item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty
                message='Nenhum Pokemon'
              />
            )}
          />
        )
      }






      <Button
        title='Minha PokeRube'
        onPress={() => handleMyPoke()}
      />
    </S.Container>
  );
}
