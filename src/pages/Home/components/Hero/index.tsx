import { Typography } from '@mui/material';
import { HeroContainer } from './hero-styled';
import { Bullet } from './components/Bullet';

export function Hero() {
  const bullets = [
    {
      id: 0,
      image: './bullets/cart-bullet.svg',
      text: 'Compra simples e segura',
    },
    {
      id: 1,
      image: './bullets/package-bullet.svg',
      text: 'Embalagem mantém o café intacto',
    },
    {
      id: 2,
      image: './bullets/timer-bullet.svg',
      text: 'Entrega rápida e rastreada',
    },
    {
      id: 3,
      image: './bullets/coffee-bullet.svg',
      text: 'O café chega fresquinho até você',
    },
  ];

  return (
    <HeroContainer py="4rem" m="auto">
      <div className="left-content">
        <div>
          <Typography variant="h1">
            Encontre o café perfeito para qualquer hora do dia
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              mt: 1,
              mb: 4,
            }}
          >
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Typography>
        </div>
        <div className="bullets">
          {bullets.map((bullet) => (
            <Bullet key={bullet.id} {...bullet} />
          ))}
        </div>
      </div>
      <div className="right-content">
        <div>
          <img src="/home/hero.svg" alt="Coffee Delivery" />
        </div>
      </div>
    </HeroContainer>
  );
}
