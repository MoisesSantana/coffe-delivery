import { HeroContainer } from './hero-styled';
import hero from '../../../../assets/images/home/hero.svg';
import cartBullet from '../../../../assets/images/home/bullets/cart-bullet.svg';
import coffeBullet from '../../../../assets/images/home/bullets/coffe-bullet.svg';
import packageBullet from '../../../../assets/images/home/bullets/package-bullet.svg';
import timerBullet from '../../../../assets/images/home/bullets/timer-bullet.svg';
import { Bullet } from './components/Bullet';

export function Hero() {
  const bullets = [
    { id: 0, image: cartBullet, text: 'Compra simples e segura' },
    { id: 1, image: packageBullet, text: 'Embalagem mantém o café intacto' },
    { id: 2, image: timerBullet, text: 'Entrega rápida e rastreada' },
    { id: 3, image: coffeBullet, text: 'O café chega fresquinho até você' },
  ];

  return (
    <HeroContainer>
      <div className="left-content">
        <div className="titles">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="bullets">
          {bullets.map((bullet) => (
            <Bullet key={bullet.id} {...bullet} />
          ))}
        </div>
      </div>
      <div className="right-content">
        <div className="image">
          <img src={hero} alt="Coffe Delivery" />
        </div>
      </div>
    </HeroContainer>
  );
}
