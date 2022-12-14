import AsyncStorage from "@react-native-async-storage/async-storage";
import { MY_POKEMONS } from "@storage/storageConfig";

export async function getAllPokemons() {
  try {
    const storage = await AsyncStorage.getItem(MY_POKEMONS);

    const pokemons: string[] = storage ? JSON.parse(storage) : [];

    return pokemons;
  } catch (error) {
    throw error;
  }
}
