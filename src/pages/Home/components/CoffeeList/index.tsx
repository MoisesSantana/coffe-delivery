import { Grid, Typography } from '@mui/material';
import { CoffeeCard } from './CoffeeCard';
import { cards } from '../../../../data';

export function CoffeeList() {
  return (
    <div>
      <Typography variant="h2" sx={{ my: 4 }}>
        Nossos cafés
      </Typography>
      <Grid container spacing={6}>
        {cards.map((coffee) => (
          <Grid key={coffee.id} item xs={12} sm={6} md={4} lg={3}>
            <CoffeeCard {...coffee} coffee={coffee} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
