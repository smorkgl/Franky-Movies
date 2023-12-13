import React, {useEffect, useState} from 'react';
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
const searchMovies = (str, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=3e39764d&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setMovies(data.Search) }
                );
    }
 
    useEffect(() => {fetch(`https://www.omdbapi.com/?apikey=3e39764d&s=Shrek`)
     .then(response => response.json())
    .then(data => setMovies({ movies: data.Search}) && setLoading({loading: false }))
    .catch((err) => {
        console.log(err);
        setLoading(false)
    } )
}, [])

        
        return (
            <main className="container content">
                <Search searchMovies={searchMovies} />
                {loading ? (
                    <Preloader />) :
                    (<Movies movies={movies} />)
                }

                </main>
            )
}
export { Main }