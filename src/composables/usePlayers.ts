import { computed, ref } from "vue";
import { defineStore } from "pinia";
import {
  Player,
  getPlayersByDateGame,
  deleteOnePlayerById,
} from "../firebase/db";

const usePlayers = defineStore("players", () => {
  let players = ref<Player[]>([]);
  const totalPlayers = ref(0);
  const getPlayers = async () => {
    const snapShot = await getPlayersByDateGame("2023-05-21");
    let tempPlayers: Player[] = [];
    snapShot.forEach((doc: any) => {
      // @ts-ignore
      tempPlayers.push({ id: doc.id, ...doc.data() });
    });

    totalPlayers.value = tempPlayers.length;
    players.value = tempPlayers.sort((a: any, b: any) => {
      return a.createdAt - b.createdAt;
    });
  };

  const handleDelete = (id: string) => {
    deleteOnePlayerById(id).then(() => getPlayers());
  };

  return {
    players: computed(() => players),
    totalPlayers: computed(() => totalPlayers),
    handleDelete,
    getPlayers,
  };
});

export { usePlayers };
