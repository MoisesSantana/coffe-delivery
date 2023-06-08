import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from './default-layout-styled';
import { CoffeProvider } from '../../context/coffe-context';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <CoffeProvider>
        <Header />
        <Outlet />
      </CoffeProvider>
    </LayoutContainer>
  );
}
