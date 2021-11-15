import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MainCard(props) {

  const [nombre, setNombre] = React.useState('Hola');
    const handle = () => {
        setNombre(props.newName);
        console.log(props.newName);
    }
  
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="ust.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DAS TEAM
          </Typography>
          <Typography variant="body2" color="text.secondary">
            DevOps Application Support Assignment Group is dedicated for all the incoming INC and RITM related
            to 2nd level of Technical Support for Digital Products. Assignment Group is monitored on 24x5 basis.
          </Typography>
          <div>
              {nombre}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handle}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
}