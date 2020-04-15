import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL UI
// import Grid from "@material-ui/core/Grid";

// Components
import MovieCard from "../MovieCard";
import { GO_TO_MOVIE } from "../../redux/actions/actionTypes";
// import { findSingleMovie } from "../../redux/actions/actionTypes";

// REDUX
import { connect } from "react-redux";

class MovieDetail extends Component {
  //ADD NEW API CALLS HERE
  /*componentDidMount() {
    this.props.getSingleMovie(this.props.movies.id); // still need to import `getSingleMovie` from redux actions, setup PropTypes for this function
  }*/

  render() {
    const { movies, loading } = this.props.data;

    let movieMarkup = !loading ? (
      movies.map((data) => <MovieCard movies={data} />)
    ) : (
      <p>Loading...</p>
    );

    console.log("Specific Movie Page");
    console.log(this);

    return <>{movieMarkup}</>;
  }
}

MovieDetail.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  // getSpecificMovie: PropTypes.func.isRequired,
  //getSingleMovie: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => {
  dispatch({
    type: GO_TO_MOVIE,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
