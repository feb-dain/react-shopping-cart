import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { MAX_NUMBER_LENGTH, NOT_NUMBER, QUANTITY } from '../constants';

interface Props {
  setIsSelected: (value: SetStateAction<boolean>) => void;
  removeItemFromCart: () => void;
  setQuantity: Dispatch<string | number>;
  addToCart: (value: string) => void;
}

export const useHandleQuantityInput = ({ ...props }: Props) => {
  const { setIsSelected, removeItemFromCart, setQuantity, addToCart } = props;

  const handleNumberInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;

    if (value === QUANTITY.NONE) {
      setIsSelected(false);
      removeItemFromCart();

      return setQuantity(QUANTITY.INITIAL);
    }

    const onlyTwoDigits = parseInt(value.replace(NOT_NUMBER, '').slice(0, MAX_NUMBER_LENGTH));
    setQuantity(onlyTwoDigits);
    addToCart(String(onlyTwoDigits));
  };

  return handleNumberInputChange;
};