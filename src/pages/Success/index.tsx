import { Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { MainContent, SuccessContainer } from './success-styled';
import { DeliveryStatusItem } from './components/DeliveryStatusItem';
import { CoffeContext } from '../../context/coffe-context';

const deliveryStatusItems = [
  {
    icon: '/success/bullets/pin.svg',
    title: '',
    description: '',
  },
  {
    icon: '/success/bullets/timer.svg',
    title: 'Previsão de entrega',
    description: '20 min - 30 min',
  },
  {
    icon: '/success/bullets/payment.svg',
    title: 'Pagamento na entrega',
    description: '',
  },
];

export function Success() {
  const { palette } = useTheme();
  const { order } = useContext(CoffeContext);
  const orderStatus = deliveryStatusItems.map((curStatus, index) => {
    switch (index) {
      case 0:
        return {
          ...curStatus,
          title: `Entrega em ${order.street}, ${order.number}`,
          description: `${order.city}, ${order.uf}`,
        };
      case 2:
        return {
          ...curStatus,
          description: order.paymentMethod,
        };
      default:
        return curStatus;
    }
  });
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
            {orderStatus.map((statusItem) => (
              <DeliveryStatusItem key={statusItem.title} {...statusItem} />
            ))}
          </section>
        </div>
        <img src="/success/hero.svg" alt="entregador" className="hero" />
      </MainContent>
    </SuccessContainer>
  );
}
