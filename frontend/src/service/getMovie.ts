import { Movie } from "types/movie";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


export const getMovie = async (): Promise<Movie[]> => {
  
  
    const movieCollection = collection(db, 'movies');
  
    const snapshot = await getDocs(movieCollection);
  
    let lmovie = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as unknown as Movie));
    console.log(lmovie);
    return lmovie;
  };