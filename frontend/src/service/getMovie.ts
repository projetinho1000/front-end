import { Register } from "@Types/register";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


export const getMovie = async (): Promise<Register[]> => {
  
  
    const movieCollection = collection(db, 'movies');
  
    const snapshot = await getDocs(movieCollection);
  
    let lmovie = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as Register));
    console.log(lmovie);
    return lmovie;
  };