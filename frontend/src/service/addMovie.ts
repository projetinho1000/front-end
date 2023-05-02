
import { collection, addDoc } from "firebase/firestore";
import { Movie } from "types/movie";
import { db } from "./firebase";

const movieCollection = collection(db, 'movies');

export const addMovie = async (item: Movie): Promise<void> => {
  await addDoc(movieCollection, item);
};