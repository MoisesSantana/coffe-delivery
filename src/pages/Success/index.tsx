import { Typography, useTheme } from '@mui/material';
import { MainContent, SuccessContainer } from './success-styled';
import { DeliveryStatusItem } from './components/DeliveryStatusItem';

const deliveryStatusItems = [
  {
    icon: '/success/bullets/pin.svg',
    title: 'endereço',
    description: 'x',
  },
  {
    icon: '/success/bullets/timer.svg',
    title: 'tempo',
    description: 'y',
  },
  {
    icon: '/success/bullets/payment.svg',
    title: 'pagamento',
    description: 'z',
  },
];

export function Success() {
  const { palette } = useTheme();
  return (
    <SuccessContainer>
      <Typography variant="h2" fontWeight={800} color={palette.warning.dark}>
        Uhu! Pedido confirmado
      </Typography>
      <Typography variant="subtitle1">
        Agora é só aguardar que logo o café chegará até você
      </Typography>
      <MainContent>
        <div>
          <section>
            {deliveryStatusItems.map((statusItem) => (
              <DeliveryStatusItem key={statusItem.title} {...statusItem} />
            ))}
          </section>
        </div>
        <img src="/success/hero.svg" alt="entregador" />
      </MainContent>
    </SuccessContainer>
  );
}
