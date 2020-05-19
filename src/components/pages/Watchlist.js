import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL UI
// import Grid from "@material-ui/core/Grid";

// Components
import MovieCard from "../MovieCard";

// REDUX
import { getMovies } from "../../redux/actions/movieCalls";
import { connect } from "react-redux";

class Watchlist extends Component {
  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    console.log("Attempting to render watchlist");

    const { movies, loading, watchlist } = this.props.data;

    let movieMarkup = !loading ? (
      watchlist.map((data, index) => <MovieCard key={index} movies={data} />)
    ) : (
      <p>Loading...</p>
    );

    console.log("Watchlist has been rendered");

    return <>{movieMarkup}</>;
  }
}

Watchlist.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  getMovies: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getMovies })(Watchlist);
