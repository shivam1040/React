import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies]=useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  //firing GET using fetch promises
  // async function fetchMoviesHandler(){
  //   // fetch("https://swapi.dev/api/films").then(response => {
  //   //   return response.json()
  //   // }).then(data => {
  //   //   const transFormedMovies = data.results.map(movieData => {
  //   //     return {
  //   //       id: movieData.episode_id,
  //   //       title: movieData.title,
  //   //       openingText: movieData.opening_crawl,
  //   //       releaseDate: movieData.release_date
  //   //     }
  //   //   })
  //   //   setMovies(transFormedMovies)
  //   // })

  //   //making use of async await
  //   setIsLoading(true)

  //   try {
  //     const response = await fetch("https://swapi.dev/api/films")
  //     const data = await response.json()

  //     if(!response.ok)
  //       throw new Error('Error')
      
  //     const transFormedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       }
  //     })
  
  //     setMovies(transFormedMovies)
  //     setIsLoading(false)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  //   setIsLoading(false)
  // }

  //if we give function as changing dependency in useEffect then issue is that function are pointers in object and everytime they are created newly so at every reload the useEffect will get executed then again new function pointer in obj then again useeffect exec whicj will create infinite loop
  // to avoid tgst we use useCallback which will return memoized version of the pointer obj and it will only be change when depe given in useCallback chages thus avoiding infinite loop
 const fetchMoviesHandler = useCallback(async () =>{
    // fetch("https://swapi.dev/api/films").then(response => {
    //   return response.json()
    // }).then(data => {
    //   const transFormedMovies = data.results.map(movieData => {
    //     return {
    //       id: movieData.episode_id,
    //       title: movieData.title,
    //       openingText: movieData.opening_crawl,
    //       releaseDate: movieData.release_date
    //     }
    //   })
    //   setMovies(transFormedMovies)
    // })

    //making use of async await
    setIsLoading(true)
    setError(null)

    try {
      //const response = await fetch("https://swapi.dev/api/films")
      //making use of firebase to for no code database
      const response = await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/movies.json")
      const data = await response.json()

      if(!response.ok)
        throw new Error('Error')

      const loadedMovies = []

      for(const key in data)
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      
        //transformation required when getting data from swapi
      // const transFormedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date
      //   }
      // })
  
      //setMovies(transFormedMovies)
      setMovies(loadedMovies)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  async function addMovieHandler(movie) {
    const response = await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json" 
      }
    })
    const data = await response.json()
    console.log(data);
  }

  let content = <p>No movies</p>

  if(movies.length>0)
    content=<MoviesList movies={movies} />
  if(error)
    content=<p>{error}</p>
  if(isLoading)
    content=<p>Loading</p>

  return (
    <React.Fragment>
       <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
