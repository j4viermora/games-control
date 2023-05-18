import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  where,
  query,
  doc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export type Player = {
  id?: string;
  name: string;
  isVerified: boolean;
  dateGame: string;
  createdAt?: string;
};

export const addPlayer = async ({ name, isVerified, dateGame }: Player) => {
  try {
    const docRef = await addDoc(collection(db, "players"), {
      name,
      isVerified,
      dateGame,
      createdAt: new Date().getTime(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPlayersByDateGame = async (dateGame: string) => {
  const ref = collection(db, "players");
  const q = query(ref, where("dateGame", "==", dateGame));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

export const deleteOnePlayerById = async (id: string) => {
  deleteDoc(doc(db, "players", id));
};
