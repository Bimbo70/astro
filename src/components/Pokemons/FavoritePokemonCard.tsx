import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePokemon } from "../../interfaces/favorite-pokemons";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites: FavoritePokemon[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );

    const updated = favorites.filter((fav) => fav.name !== props.pokemon.name);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${props.pokemon.name}`}>
          <img
            src={imageSrc}
            alt={props.pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: ${props.pokemon.name}-image`}
          />
          <p class="capitalize">
            #{props.pokemon.id} {props.pokemon.name}
          </p>
        </a>
        <button onClick={deleteFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
};