import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import NoteCard from './NoteCard';
import { LoadImage } from '../hooks/api';
import { motion } from 'framer-motion';

function Card({ searchQuery, setSelectedImg }) {
  // const [query, setQuery] = useState();
  // console.log(query);
  // console.log(SearchImage(query));
  const data = LoadImage();
  // const search = SearchImage();
  // console.log(search);

  return (
    <div className='center'>
      <Container>
        <Grid container>
          {searchQuery
            ? searchQuery.map((img) => (
                <Grid item key={img.id} xs={12} md={6} lg={4}>
                  <motion.div>
                    <NoteCard setSelectedImg={setSelectedImg} img={img} />
                  </motion.div>
                </Grid>
              ))
            : data.map((img) => (
                <Grid item key={img.id} xs={12} md={6} lg={4}>
                  <motion.div>
                    <NoteCard img={img} />
                  </motion.div>
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Card;
