import React, {useEffect, useState} from "react";
import Movie from "./components/Movie";


const FEATURED_API  = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//const IMG_API  ="https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";





function App() {
  const [movies, setMovies]= useState([]);
  const [searchTerm, setSearchTerm]= useState('');

  useEffect(() => {
fetch(FEATURED_API)
.then((res)=> res.json())
.then((data)=>{
  setMovies(data.results);
});
  },[]);


const handleOnSubmit=(e)=>{
  e.preventDefault();

if(searchTerm){

  fetch(SEARCH_API + searchTerm)
  .then((res)=> res.json())
  .then((data)=>{
    setMovies(data.results);
  });
setSearchTerm('');
}
};

const handleOnChainge =(e)=>{
setSearchTerm(e.target.value);
};

  return (
    <>
    <header>
      <h1 className="app-nom">  VU </h1>
      <form onSubmit={handleOnSubmit}>
      <input className="searchbar"  type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChainge} />
      </form>
    </header>
    <div className="movie-container">
      
    {movies.length > 0 && movies.map((movie)=> 
    <Movie  key={movie.id}  {...movie}
    />
    )};
    </div>
    </>
  );
}

export default App;
