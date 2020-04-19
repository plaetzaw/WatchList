import React, { Component } from "react";
import PropTypes from "prop-types";
// MUI STUFF
// import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import { getSingleMovie } from "../redux/actions/movieCalls";
// REDUX STUFF
import { connect } from "react-redux";
class MovieFullDetail extends Component {
  render() {
    console.log("==========SINGLE MOVIE STUFF===========");
    // console.log("single movie prop data: ", this.props.data);
    let cast = this.props.data.specificMovie.credits.cast;
    console.log("cast", this.props.data.specificMovie.credits.cast);
    console.log(cast);
    //Mapping why don't y ou work!
    //can't render itself (naming problem recursive)
    //let castList = cast.map((data) => <MovieFullDetail movies={data} />);
    let castList = cast.map((creditInfo) => {
      return (
        <Card>
          <CardActionArea>
            {/* <CardMedia
              component="img"
              src={`https://image.tmdb.org/t/p/original/${creditInfo.profile_path}`}
              width="300px"
            /> */}

            {/* <li> */}
            <img
              src={`https://image.tmdb.org/t/p/original/${creditInfo.profile_path}`}
              width="300px"
            />
            <Typography variant="body1" color="textSecondary">
              {creditInfo.name} as {creditInfo.character}
            </Typography>
            {/* </li> */}
          </CardActionArea>
        </Card>
      );
    });
    console.log("castList:   ", castList);
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="{this.props.data.specificMovie.details.title}"
            height="500"
            src={`https://image.tmdb.org/t/p/original/${this.props.data.specificMovie.details.backdrop_path}`}
            title="{this.props.data.specificMovie.details.title}"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.data.specificMovie.details.title}
              <br />
              <br />
              {this.props.data.specificMovie.details.tagline}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              <br />
              {this.props.data.specificMovie.details.overview}
              <br />
              Release Date: {this.props.data.specificMovie.details.release_date}
              <br />
              Budget: ${this.props.data.specificMovie.details.budget}USD
              <br />
              IDs: {this.props.data.specificMovie.credits.id}
              <br />
              Runtime: {this.props.data.specificMovie.details.runtime} minutes
              <br />
              Cast:
              <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                {castList}
              </Grid>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
// REDUX JUNK BELOW
MovieFullDetail.propTypes = {
  data: PropTypes.object.isRequired,
  getSingleMovie: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(MovieFullDetail);
