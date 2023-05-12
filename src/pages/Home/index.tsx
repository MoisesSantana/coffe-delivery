import { CoffeeList } from './components/CoffeeList';
import { Hero } from './components/Hero';
import { HomeContainer } from './home-styled';

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <CoffeeList />
    </HomeContainer>
  );
}
