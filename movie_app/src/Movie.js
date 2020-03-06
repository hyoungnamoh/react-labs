import React from "react";
import PropTypes from "prop-types";

const Movie = ({id, year, title, summary, poster}) => {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h3 className="movie_year">{year}</h3>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes ={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;