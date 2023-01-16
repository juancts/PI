import axios from "axios";
import { AZ, ATTACKASC, ATTACKDSC, ZA } from "../components/Order/types";
import {
  ADD_TYPES,
  DETAIL_POKEMONES,
  FILTER_POKEMONES,
  GET_POKEMONES,
  SEARCH_POKEMONES,
  SORT_POKEMONES,
} from "./types";

export function getAllPoke() {
  return async (dispatch) => {
    await fetch("http://localhost:3001/api/pokemones/")
      .then((res) => res.json())
      .then((data) => {
        //  let toApiTypes = [];
        // data.map((e) => {
        //   if (e.fromDb === true) {
        //     if (!toApiTypes.length) {
        //       toApiTypes = [];
        //       e.types.map((e) => {
        //         toApiTypes.push(e.name);
        //       });
        //     }
        //     e.types = toApiTypes;
        //   }
        // });
        //console.log("TO API TYPES: ", toApiTypes);

        dispatch({
          type: GET_POKEMONES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchPokemones(search) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/api/pokemones/?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        let toApiTypes = [];
        if (data.fromDb === true) {
          data.types.map((e) => {
            toApiTypes.push(e.name);
          });
          data.types = toApiTypes;
        }
        console.log("DATA :", data);
        dispatch({
          type: SEARCH_POKEMONES,
          payload: [data],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function sortPokemones(order, pokes) {
  try {
    return async (dispatch) => {
      let orderedPokemones = pokes;
      if (order === ATTACKASC) {
        orderedPokemones = orderedPokemones.sort((a, b) =>
          a.attack > b.attack ? 1 : a.attack < b.attack ? -1 : 0
        );
        console.log(
          "ATTACKasc:",
          orderedPokemones.map((e) => e.attack)
        );
        console.log("ATTACKasc:", orderedPokemones);
      } else {
        if (order === ATTACKDSC) {
          orderedPokemones = orderedPokemones.sort((a, b) =>
            a.attack > b.attack ? -1 : a.attack < b.attack ? 1 : 0
          );
          console.log(
            "ATTACKdsc:",
            orderedPokemones.map((e) => e.attack)
          );
          console.log("ATTACKdsc:", orderedPokemones);
        }
      }
      if (order === AZ) {
        orderedPokemones = orderedPokemones.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        console.log(
          "AZ:",
          orderedPokemones.map((e) => e.name)
        );
      } else {
        if (order === ZA) {
          orderedPokemones = orderedPokemones.sort((a, b) =>
            a.name > b.name ? -1 : a.name < b.name ? 1 : 0
          );
          console.log(
            "ZA:",
            orderedPokemones.map((e) => e.name)
          );
        }
      }

      dispatch({
        type: SORT_POKEMONES,
        payload: orderedPokemones,
      });
    };
  } catch (error) {
      {
      console.log(error);
    };
  }
}

export function filterPokemones(filter) {
  const URL = "http://localhost:3001/api/pokemones";
  return async (dispatch) => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        let result = [];
        if (filter === "database") {
          let toApiTypes = [];
          console.log(data);
          result = data.filter((e) => e.fromDb === true);
          console.log("result from 1er if", result);
          result.map((e) => {
            e.types.map((e) => toApiTypes.push(e.name));
            e.types = toApiTypes;
          });
          //result.map((e)=> e.types = toApiTypes)

          if (!result.length) window.alert("No hay pokemones en BD");
          console.log("RESULT FILTER DB API:", result);
        } else if (filter === "api") {
          result = data.filter((e) => e.fromDb === false);
        } else {
          data.map((e) => {
            if (e.fromDb === true && e.types.find((n) => n.name === filter)) {
              result.push(e);
            }
            if (e.types.includes(filter)) result.push(e);
          });
        }

        if (result) {
          dispatch({
            type: FILTER_POKEMONES,
            payload: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function addTypes(type) {
  return async (dispatch) => {
    await fetch("http://localhost:3001/api/types/getTypes")
      .then((res) => res.json())
      .then((data) => {
        let result = [];
        data.map((e) => result.push(e.name));
        console.log("RESULT: ", result);
        dispatch({
          type: ADD_TYPES,
          payload: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getPokeById(id) {
  return async (dispatch) => {
    await fetch(`http://localhost:3001/api/pokemones/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let toApiTypes = [];
        if (data.fromDb === true) {
          data.types.map((e) => {
            toApiTypes.push(e.name);
          });
          data.types = toApiTypes;
          console.log("DATA API TYPES ID:", data)
        }
        dispatch({
          type: DETAIL_POKEMONES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getType(id, pokes) {
  let typ = [];
  pokes.map((e) => {
    if (id === e.id) typ.push(e.types);
  });
  return typ;
}

//ADD TYPES
// return async (dispatch) => {
//   const URL = "http://localhost:3001/api/pokemones";
//   await fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//       let result = [];

//       data.map((e) => {
//         if (e.fromDb === false) {
//           result.push(e.types);
//         }
//       });
//       result = result.toString().split(",");
//       result = new Set(result);
//       result = [...result].filter((t) => t !== "");

//       console.log("RESULT: ", result);

//       result.map(async (e) => {
//         await axios.post(`http://localhost:3001/api/types/${e}`);
//         console.log(e);
//       });
