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
import Store from "../redux/store";

// REDUX STUFF
import { getMovies } from "../redux/actions/movieCalls";
import { connect } from "react-redux";

/* const styles = (theme) => ({
  ...theme.spreadThis,
  newThing: {
    color: "purple",
    fontSize: "1000px"
  }
}) */

// export default function ImgMediaCard() {
class ImgMediaCard extends Component {
  //ADD NEW API CALLS HERE
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      // {<Card className={classes.newThing}>}

      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

// REDUX JUNK BELOW

ImgMediaCard.propTypes = {
  //ADD PROP TYPES HERE JUST REPEAT FuncName: PropTypes.func.isRequired
  getMovies: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

//export default ImgMediaCard;

// {getMovies, nextAPICAll, nextAPICall, etc.}
export default connect(mapStateToProps, { getMovies })(ImgMediaCard);

//export default withStyles((styles)(ImgMediaCard))
