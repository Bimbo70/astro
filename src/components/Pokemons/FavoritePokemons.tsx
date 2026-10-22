import type { FavoritePokemon } from "../../interfaces/favorite-pokemons";
import {For, createSignal} from 'solid-js'



const getLocalStoragePokemons = (): FavoritePokemon[] =>{
    const FavoritePoekemons = JSON.parse(
        localStorage.getItem('favorites') ?? '[]'
    )

    return FavoritePoekemons;
}

export const FavoritePoekemons = () => {

const [ Pokemons, setPokemons] = createSignal( getLocalStoragePokemons());


return(<div class="grid grid-cols-2 sm:grid-cold-4">
    <For each={ Pokemons() }>
        {
            pokemon => <h1>{pokemon.name}</h1>
        }
    </For>   
</div>)

}
