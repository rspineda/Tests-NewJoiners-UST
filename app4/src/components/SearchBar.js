import "./SearchBar.css";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class SearchBar extends React.Component {
  /*callback
    onInputChange(event) {
        console.log(event.target.value);
    }*/

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    //on inputchange - callback function never  use parenthesis at the end
    //
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <br />
            <label>Pilar's Image Search</label>
            <br />
            <TextField
              id="filled-search"
              size="small"
              label="Introduzca un animal"
              //type="search"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              variant="standard"
            />
            {/*<input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="filled-search"
                  size="small"
                  label="Introduzca un animal"
                  type="search"
                  variant="standard"
                />
              </div>
            </Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card> */}
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
