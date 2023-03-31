import { Grid } from '@mui/material';
import { CoffeCard } from '../CoffeCard';
import coffeAmericano from '../../../../assets/images/coffes/coffe-americano.svg';
import coffeArabe from '../../../../assets/images/coffes/coffe-arabe.svg';
import coffeCapuccino from '../../../../assets/images/coffes/coffe-capuccino.svg';
import coffeChocolateQuente from '../../../../assets/images/coffes/coffe-chocolate-quente.svg';
import coffeComLeite from '../../../../assets/images/coffes/coffe-com-leite.svg';
import coffeCremoso from '../../../../assets/images/coffes/coffe-cremoso.svg';
import coffeCubano from '../../../../assets/images/coffes/coffe-cubano.svg';
import coffeExpresso from '../../../../assets/images/coffes/coffe-expresso.svg';
import coffeGelado from '../../../../assets/images/coffes/coffe-gelado.svg';
import coffeHavaiano from '../../../../assets/images/coffes/coffe-havaiano.svg';
import coffeIrlandes from '../../../../assets/images/coffes/coffe-irlandes.svg';
import coffeLatte from '../../../../assets/images/coffes/coffe-latte.svg';
import coffeMacchiato from '../../../../assets/images/coffes/coffe-macchiato.svg';
import coffeMochaccino from '../../../../assets/images/coffes/coffe-mochaccino.svg';
import { CoffeListContainer } from './coffelist-styled';

export function CoffeList() {
  const cards = [
    {
      id: 0,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: coffeExpresso,
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 1,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: coffeAmericano,
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 2,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      image: coffeCremoso,
      price: 9.9,
      tags: ['tradicional'],
    },
    {
      id: 3,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: coffeGelado,
      price: 9.9,
      tags: ['tradicional', 'gelado'],
    },
    {
      id: 4,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: coffeComLeite,
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 5,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: coffeLatte,
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 6,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: coffeCapuccino,
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 7,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      image: coffeMacchiato,
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 8,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: coffeMochaccino,
      price: 12.9,
      tags: ['tradicional', 'com leite'],
    },
    {
      id: 9,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      image: coffeChocolateQuente,
      price: 17.5,
      tags: ['especial', 'com leite'],
    },
    {
      id: 10,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: coffeCubano,
      price: 20,
      tags: ['especial', 'alcoólico', 'gelado'],
    },
    {
      id: 11,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: coffeHavaiano,
      price: 15,
      tags: ['especial'],
    },
    {
      id: 12,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      image: coffeArabe,
      price: 15,
      tags: ['especial'],
    },
    {
      id: 13,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      image: coffeIrlandes,
      price: 20,
      tags: ['especial', 'alcoólico'],
    },
  ];

  return (
    <CoffeListContainer>
      <h3>Nossos cafés</h3>
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
