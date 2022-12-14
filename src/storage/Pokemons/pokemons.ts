import AsyncStorage from "@react-native-async-storage/async-storage";
import { MY_POKEMONS } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { getAllPokemons } from "./getAllPokemons";

export async function addPokemon(newPokemon: string) {
  try {
    const pokeStorage = await getAllPokemons();

    const pokemonexist = pokeStorage.includes(newPokemon);

    if (pokemonexist) {
      throw new AppError("Este Pokemon já está adcionado!");
    }

    const storage = JSON.stringify([...pokeStorage, newPokemon]);
    await AsyncStorage.setItem(MY_POKEMONS, storage);
  } catch (err) {
    throw err;
  }
}
