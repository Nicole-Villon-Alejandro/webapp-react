import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../contexts/globalContext";


export default function Homepage() {
    const [movies, setMovies] = useState([]);
    const { setIsLoading } = useContext(GlobalContext);

    const fetchMovies = () => {
        console.log('fetching movies...');

        setIsLoading(true);

        axios
        .get('http://localhost:3000/movies')
        .then((res) => {
          setMovies(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .then( () => setIsLoading(false) );

        
    };

    const renderMovies = () => {
        return movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        });
    };

    //Invocazione chiamata al caricamento del componente in pagina
  useEffect(fetchMovies, []);


  return (
    <>
        <h1>Films</h1>
        <p>Welcome to the homepage of my favorites films!</p>
        
        <p>La home, in cui mostreremo la lista dei film</p>
        <div className="row row-cols-3">
            {/* <BookCard/> */}
            {renderMovies()}
           
            
        </div>
    </>
    
  );
}