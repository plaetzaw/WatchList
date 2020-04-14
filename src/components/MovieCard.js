import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI STUFF
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// REDUX STUFF
import { connect } from "react-redux";

/* const styles = (theme) => ({
  ...theme.spreadThis,
  newThing: {
    color: "purple",
    fontSize: "1000px"
  }
}) */

// addToMovieList = (params) => {};

// removeFromMovieList = (paramas) => {};

// export default function ImgMediaCard() {
class MovieCard extends Component {
  render() {
    console.log(this);
    return (
      // {<Card className={classes.newThing}>}
      <Card
      // id={}
      >
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
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.addFavorite} size="small" color="primary">
            Add to WatchList
          </Button>
          <Button size="small" color="primary">
            View Full Information
          </Button>
        </CardActions>
      </Card>
    );
  }
}

// REDUX JUNK BELOW

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

//export default ImgMediaCard;

// {getMovies, nextAPICAll, nextAPICall, etc.}
export default connect(mapStateToProps)(MovieCard);

//export default withStyles((styles)(ImgMediaCard))
