import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
// let player = {
//   id: uuidv4(),
//   name: "playerName",
//   active: true,
//   socore: {

//   }
// };
const players = writable([]);

const playerStore = {
  subscribe: players.subscribe,
  newPlayer: playerName => {
    const newPlayer = {
      id: uuidv4(),
      name: playerName,
      active: true,
      socores: {
        "gemeinsamesache": 0,
        "blackout": 0,
      }
    };
    players.update(items => {
      return [newPlayer, ...items];
    });
  },
  togglePlayerStatus: id => {
    players.update(items => {
      let updatedPlayer = {...items.find(p => p.id === id)}
      updatedPlayer.active = !updatedPlayer.active

      let playerIndex = items.findIndex(p => p.id === id);

      let updatedPlayers = [...items]
      updatedPlayers[playerIndex] =updatedPlayer
      console.log(updatedPlayers)
      return updatedPlayers
    })
  },
  updatePlayer: (id, playerData) => {
    players.update(items => {
      // let updatedPlayer = {...items.find(p => p.id === id)}
      // updatedPlayer.active = !updatedPlayer.active

      let playerIndex = items.findIndex(p => p.id === id);

      let updatedPlayers = [...items]
      updatedPlayers[playerIndex] = playerData
      return updatedPlayers
    })
  }
};

export default playerStore;