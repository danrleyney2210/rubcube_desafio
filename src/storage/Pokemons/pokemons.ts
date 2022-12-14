import AsyncStorage from "@react-native-async-storage/async-storage";
import { MY_POKEMONS } from "@storage/storageConfig";
import { getAllPokemons } from "./getAllPokemons";

export async function addPokemon(newPokemon: string) {
  try {
    const pokeStorage = await getAllPokemons();

    const storage = JSON.stringify([...pokeStorage, newPokemon]);
    await AsyncStorage.setItem(MY_POKEMONS, storage);
  } catch (err) {
    throw err;
  }
}
