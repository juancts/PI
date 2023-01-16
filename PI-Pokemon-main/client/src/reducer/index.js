//import { bindActionCreators } from "redux";
import {
  GET_POKEMONES,
  SEARCH_POKEMONES,
  SORT_POKEMONES,
  FILTER_POKEMONES,
  ADD_TYPES,
  DETAIL_POKEMONES,
} from "../actions/types";

const initialState = {
  pokemones: [],
  filteredPokemones: [],
  types: [],
  pokedetail:[],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POKEMONES:
      let filteredPokemones = payload;
      console.log("FILTERED POKES:", filteredPokemones);
      let toApiTypes = [];
        filteredPokemones.map((e) => {
        if (e.fromDb === true) {
             if (toApiTypes.length) {
               toApiTypes = [];
               e.types.map((e) => {
                toApiTypes.push(e.name);
              });
           }
            e.types = toApiTypes;
          }
        });
      return {
        ...state,
        pokemones: payload,
        filteredPokemones: filteredPokemones,
      };
    case SEARCH_POKEMONES:
      return {
          ...state,
          filteredPokemones: payload,
        };
    case SORT_POKEMONES:
      return {
        ...state,
        filteredPokemones: payload,
      };

    case FILTER_POKEMONES:
      return {
        ...state,
        filteredPokemones: payload,
      };
    case ADD_TYPES:
      return {
        ...state,
        types: payload,
      };
      case DETAIL_POKEMONES:
      return {
        ...state,
        pokedetail: payload,
      };

    default:
      return state;
  }
}
