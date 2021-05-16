import React, {useState, useRef} from 'react';
import Movie from './Movie'

export default function MovieList() {

    const [movies, setMovies] = useState([]);
    const sortByName = () => {
        console.log("sort");
        const sorted = [...movies].sort(function(a, b) {
            return (a.name.localeCompare(b.name));
        });
        setMovies(sorted);
        console.log(sorted);
    }

    const sortByGrade = () => {
        const sorted = [...movies].sort(function(a, b) {
            return (a.grade - b.grade);
        });
        setMovies(sorted);
        console.log(sorted);
    }

    const inputMovie = useRef();
    const inputGrade = useRef();

function addMovie() {
    if(inputMovie.current.value === "" || inputGrade.current.value === "") {
        alert("Du måste skriva in både namn och betyg");
        return;
    }
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    setMovies([...movies, {
        name: inputMovie.current.value,
        grade: inputGrade.current.value,
        id: newId
    }]);
    inputMovie.current.value = "";
    inputGrade.current.value = "";
    console.log(movies);
}

function deleteItem(id) {
    setMovies(movies.filter((item) => item.id !== id));
}
    
    return (
        <div>
        <div id="add-movie">
            <fieldset>
                <legend>Lägg till en film</legend>

                <label for="title">Titel:</label>
                <input type="text" id="title" ref={inputMovie} className="form-control"></input>

                <label for="rating">Betyg:</label>

                <select type="text" id="rating" ref={inputGrade} className="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3" value="Spara film" onClick={addMovie}></input>

            </fieldset>

            <button id="btn-orderalphabetical" className="btn btn-success" onClick={sortByName}>Bokstavsordning</button>
            <button id="btn-orderbygrade" className="btn btn-success" onClick={sortByGrade}>Efter betyg</button>

        </div>

            <ul className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} /> )}
            </ul>

        </div>
    )
}