import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// MUI STUFF
// import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
import { getSingleMovieDetail } from "../redux/actions/movieCalls";
import { addToWatchList } from "../redux/actions/movieCalls";
import { removeFromWatchList } from "../redux/actions/movieCalls";
import { withRouter } from "react-router-dom";
// REDUX STUFF
import { connect } from "react-redux";
/* const styles = (theme) => ({
  ...theme.spreadThis,
  newThing: {
    color: "purple",
    fontSize: "1000px"
  }
}) */
class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  handleOneMovie = async () => {
    await this.props.getSingleMovieDetail(this.props.movies.id);
    console.log("Vero: button clicked. off to get data");
    console.log("Vero: View Full Info Button has been clicked");
    this.props.history.push("/movieinfo");
  };
  watchListAdd = () => {
    console.log("This movie has been added to the Watchlist");
    this.props.addToWatchList(this.props.movies.id);
  };
  watchListRemove = (id) => {
    console.log("This movie has been removed from the Watchlist");
    this.props.removeFromWatchList(this.props.movies.id);
  };
  render() {
    console.log("Start Render");
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="{this.props.movies.title}"
            height="500"
            src={`https://image.tmdb.org/t/p/original/${this.props.movies.backdrop_path}`}
            title="{this.props.movies.title}"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.movies.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.movies.overview}
              <br />
              Release Date: {this.props.movies.release_date}
              <br />
              Genres: {this.props.movies.genre_ids}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.watchListAdd} size="small" color="primary">
            Add to WatchList
          </Button>
          <Button onClick={this.watchListRemove} size="small" color="primary">
            Remove from WatchList
          </Button>
          <Button
            component={Link}
            // {to={`${this.props.movies.id}`}}
            //to="/movieinfo"
            name={this.props.movies.id}
            size="small"
            color="primary"
            onClick={this.handleOneMovie}
          >
            {/* <MovieFullDetailCard /> */}
            View Full Information
          </Button>
          {/* VIEW FULL INFORMATION BUTTON WILL FIRE FUNCTION
         THAT DISPATCHES ACTION TO 
         UPDATE THE SINGLE MOVIE STATE */}
        </CardActions>
      </Card>
    );
  }
}
// REDUX JUNK BELOW
MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  getSingleMovie: PropTypes.object.isRequired,
  addToWatchList: PropTypes.object,
  removeFromWatchList: PropTypes.object,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
//export default ImgMediaCard;
// {getMovies, nextAPICAll, nextAPICall, etc.}
export default withRouter(
  connect(mapStateToProps, {
    getSingleMovieDetail,
    addToWatchList,
    removeFromWatchList,
  })(MovieCard)
);
//export default withStyles((styles)(ImgMediaCard))
