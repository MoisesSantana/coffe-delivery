import { BulletContainer } from './bullet-styled';

interface BulletProps {
  image: string;
  text: string;
}

export function Bullet({ image, text }: BulletProps) {
  return (
    <BulletContainer>
      <img src={image} alt="bullet" />
      <span>{text}</span>
    </BulletContainer>
  );
}
