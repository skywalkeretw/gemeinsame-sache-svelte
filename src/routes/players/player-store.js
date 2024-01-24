import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
let player = {
    id: "", 
    name: "", 
    socore: {}
}
const players = writable([player]);

const playerStore = {
  subscribe: players.subscribe,
  newPlayer: playerData => {
    const newPlayer = {
      id: uuidv4(),
      ...playerData
    };
    players.update(items => {
      return [newPlayer, ...items];
    });
  },
  // updateMeetup: (id, meetupData) => {
  //   meetups.update(items => {
  //     const meetupIndex = items.findIndex(i => i.id === id);
  //     const updatedMeetup = { ...items[meetupIndex], ...meetupData };
  //     const updatedMeetups = [...items];
  //     updatedMeetups[meetupIndex] = updatedMeetup;
  //     return updatedMeetups;
  //   });
  // },
  // removeMeetup: id => {
  //   meetups.update(items => {
  //     return items.filter(i => i.id !== id);
  //   });
  // },
  // toggleFavorite: id => {
  //   meetups.update(items => {
  //     const updatedMeetup = { ...items.find(m => m.id === id) };
  //     updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
  //     const meetupIndex = items.findIndex(m => m.id === id);
  //     const updatedMeetups = [...items];
  //     updatedMeetups[meetupIndex] = updatedMeetup;
  //     return updatedMeetups;
  //   });
  // }
};

export default playerStore;