import { Register } from "@Types/register";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";


export const updateMovie = async (item: Register): Promise<void> => {
    const movieDoc = doc(db, 'movies', item.name);
    await updateDoc(movieDoc, item);
  };