import { createSignal, For, onMount, type Component } from 'solid-js';
import type { FavoritePokemon } from '../../interfaces/favorite-pokemons';
import { FavoritePokemonCard } from './FavoritePokemonCard';

export const FavoritePokemons: Component = () => {
  const [favorites, setFavorites] = createSignal<FavoritePokemon[]>([]);

  onMount(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') ?? '[]'));
  });

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <For each={favorites()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};