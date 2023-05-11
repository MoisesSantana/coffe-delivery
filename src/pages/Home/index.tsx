import { CoffeList } from './components/CoffeList';
import { Hero } from './components/Hero';
import { HomeContainer } from './home-styled';

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeList />
    </HomeContainer>
  );
}
