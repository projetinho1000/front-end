import { collection, addDoc } from "firebase/firestore";
import { Movie } from "types/movie";
import { db } from "./firebase";

const movieCollection = collection(db, "movies");

interface addEntity {
  url: string;
  name: string;
  description: string;
  category: string;
  whatsapp: string;
}

export const addMovie = async (item: Movie | addEntity): Promise<void> => {
  await addDoc(movieCollection, item);
  window.location.href = "http://localhost:3000"
};
