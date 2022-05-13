import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Likes from '../asserts/like-button.svg';

function NoteCard({ img, setSelectedImg }) {
  return (
    <Card sx={{ maxWidth: 300 }} style={{ marginBottom: '1rem' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          image={img.urls.full}
          onClick={() => setSelectedImg(img.urls.full)}
          height='140'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {img.user.username}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography gutterBottom variant='h5' component='div'>
                <img
                  style={{ borderRadius: '50px' }}
                  src={img.user.profile_image.small}
                  alt={`${img.user.username}`}
                />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='body2'
                color='text.secondary'
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  marginTop: '0.8em',
                  marginLeft: '2rem',
                }}
              >
                {img.likes} likes
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NoteCard;
