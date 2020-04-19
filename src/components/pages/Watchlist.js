import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL UI
// import Grid from "@material-ui/core/Grid";

// Components
import MovieCard from "../MovieCard";

// REDUX
import { getSingleMovieDetail } from "../../redux/actions/movieCalls";
import { connect } from "react-redux";

class Watchlist extends Component {
  componentWillMount() {
    this.props.getSingleMovieDetail();
  }

  render() {
    const { movies, loading, watchlist } = this.props.data;

    let movieMarkup = !loading ? (
      watchlist.map((data, index) => <MovieCard key={index} movies={data} />)
    ) : (
      <p>Loading...</p>
    );

    console.log("NOW PLAYING PAGE");
    console.log(this);

    return <>{movieMarkup}</>;
  }
}

Watchlist.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  getSingleMovieDetail: PropTypes.func.isRequired,
  //getSpecificMovie: PropTypes.func.isRequired,
  //filterByGenre: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getSingleMovieDetail })(Watchlist);
