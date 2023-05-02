import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";


export const deleteMovie = async (id: string): Promise<void> => {
    const movieDoc = doc(db, 'movies', id);
    await deleteDoc(movieDoc);
  };