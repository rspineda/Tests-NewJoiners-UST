import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';


class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    console.log('props de la imagen', this.props.image);
    return (
      <>
      <Card sx={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Grid item spacing={100}>
          <CardMedia
            component="img"
            ref={this.imageRef}
            alt={description}
            src={urls.thumb}
          />
           <CardContent>
        <Typography>
          Lizard
        </Typography>
      </CardContent>
        </Grid>
      </Card>

      </>
    );
  }
}

export default ImageCard;
