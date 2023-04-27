import { Grid, Typography } from '@mui/material';
import { CoffeCard } from '../CoffeCard';
import { CoffeListContainer } from './coffelist-styled';

export function CoffeList() {
  const cards = [
    {
      id: 0,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: './coffes/coffe-expresso.svg',
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 1,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: './coffes/coffe-americano.svg',
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 2,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      image: './coffes/coffe-cremoso.svg',
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 3,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: './coffes/coffe-gelado.svg',
      price: 9.9,
      tags: ['tradicional', 'gelado'],
    },
    {
      id: 4,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: './coffes/coffe-com-leite.svg',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 5,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: './coffes/coffe-latte.svg',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 6,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: './coffes/coffe-capuccino.svg',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 7,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      image: './coffes/coffe-macchiato.svg',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 8,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: './coffes/coffe-mochaccino.svg',
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 9,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      image: './coffes/coffe-chocolate-quente.svg',
      price: 17.5,
      tags: ['especial', 'com leite'],
    },
    {
      id: 10,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: './coffes/coffe-cubano.svg',
      price: 20,
      tags: ['especial', 'alcoólico', 'gelado'],
    },
    {
      id: 11,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: './coffes/coffe-havaiano.svg',
      price: 15,
      tags: ['especial'],
    },
    {
      id: 12,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      image: './coffes/coffe-arabe.svg',
      price: 15,
      tags: ['especial'],
    },
    {
      id: 13,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      image: './coffes/coffe-irlandes.svg',
      price: 20,
      tags: ['especial', 'alcoólico'],
    },
  ];

  return (
    <CoffeListContainer>
      <Typography variant="h2" sx={{ my: 4 }}>
        Nossos cafés
      </Typography>
      <Grid container spacing={6}>
        {cards.map((coffe) => (
          <Grid key={coffe.id} item xs={12} sm={6} md={4} lg={3}>
            <CoffeCard {...coffe} />
          </Grid>
        ))}
      </Grid>
    </CoffeListContainer>
  );
}
