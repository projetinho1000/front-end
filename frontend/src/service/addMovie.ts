import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Register } from "@Types/register";

const movieCollection = collection(db, "movies");

export const addMovie = async (item: Register): Promise<void> => {
  await addDoc(movieCollection, item);
  window.location.href = "http://localhost:3000"
};
