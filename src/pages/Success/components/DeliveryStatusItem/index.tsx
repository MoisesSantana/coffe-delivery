import { Typography } from '@mui/material';
import { DeliveryStatusItemContainer } from './delivery-status-item-styled';

type DeliveryStatusItemProps = {
  icon: string;
  title: string;
  description: string;
};

export function DeliveryStatusItem({
  icon,
  title,
  description,
}: DeliveryStatusItemProps) {
  return (
    <DeliveryStatusItemContainer>
      <img src={icon} alt={title} />
      <div>
        <Typography variant="body1" fontSize={16}>
          {title}
        </Typography>
        <Typography fontWeight={900} variant="body1" fontSize={16}>
          {description}
        </Typography>
      </div>
    </DeliveryStatusItemContainer>
  );
}
