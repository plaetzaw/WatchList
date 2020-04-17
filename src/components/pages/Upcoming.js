import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL UI
// import Grid from "@material-ui/core/Grid";

// Components
import MovieCard from "../MovieCard";

// REDUX
import { getUpcomingMovies } from "../../redux/actions/movieCalls";
import { connect } from "react-redux";

class Upcoming extends Component {
  //ADD NEW API CALLS HERE
  componentWillMount() {
    this.props.getUpcomingMovies();
    //this.props.getSpecificMovie();
    //this.props.filterByGenre();
  }

  render() {
    const { movies, loading } = this.props.data;

    let movieMarkup = !loading ? (
      movies.map((data) => <MovieCard movies={data} />)
    ) : (
      <p>Loading...</p>
    );

    console.log("UPCOMING PAGE");
    console.log(this);

    return <>{movieMarkup}</>;
  }
}

Upcoming.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  getUpcomingMovies: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUpcomingMovies })(Upcoming);
