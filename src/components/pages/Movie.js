import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL UI
// import Grid from "@material-ui/core/Grid";

// Components
import MovieCard from "../MovieCard";

// REDUX
import { getMovies } from "../../redux/actions/movieCalls";
import { connect } from "react-redux";

class Movie extends Component {
  //ADD NEW API CALLS HERE
  componentWillMount() {
    this.props.getMovies();
    //this.props.getSpecificMovie();
    //this.props.filterByGenre();
  }

  render() {
    const { movies, loading } = this.props.data;

    let movieMarkup = !loading ? (
      movies.map((data, index) => <MovieCard key={index} movies={data} />)
    ) : (
      <p>Loading...</p>
    );

    console.log("NOW PLAYING PAGE");
    console.log(this);

    return <>{movieMarkup}</>;
  }
}

Movie.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  getMovies: PropTypes.func.isRequired,
  //getSpecificMovie: PropTypes.func.isRequired,
  //filterByGenre: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getMovies })(Movie);
