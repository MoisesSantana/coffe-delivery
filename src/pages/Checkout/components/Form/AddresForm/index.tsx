import pin from '../../../../../assets/images/cart/pin.svg';
import { AddresContainer } from './addres-styled';

export function AddressForm() {
  return (
    <AddresContainer>
      <header>
        <img src={pin} alt="pin" />
        <div className="header-texting">
          <span>Endereço de Entrega</span>
          <small>Informe o endereço onde deseja receber seu pedido</small>
        </div>
      </header>
      <div>
        <input type="text" placeholder="cep" />
      </div>
      <div>
        <input type="text" placeholder="rua" />
      </div>
      <div>
        <input type="text" placeholder="numero" />
        <input type="text" placeholder="complemento" />
      </div>
      <div>
        <input type="text" placeholder="bairro" />
        <input type="text" placeholder="cidade" />
        <input type="text" placeholder="uf" />
      </div>
    </AddresContainer>
  );
}
