import { Movie } from "types/movie";
import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";


export const updateMovie = async (item: Movie): Promise<void> => {
    const movieDoc = doc(db, 'movies', item.name);
    await updateDoc(movieDoc, item);
  };