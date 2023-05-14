import { atom, selector, selectorFamily } from 'recoil';
import { KEY_CART } from '../constants';
import { CartItem, Product } from '../types';
import { getDataFromLocalStorage } from '../utils/getAndSetDataInLocalStorage';

export const productListState = atom<Product[]>({
  key: 'productListState',
  default: [],
});

export const productSelector = selectorFamily({
  key: 'productSelector',
  get:
    (id) =>
    ({ get }) => {
      const productList = get(productListState);
      const selectedProduct = productList.find((product) => product.id === id);

      return selectedProduct;
    },
});

export const cartState = atom({
  key: 'cartState',
  default: JSON.parse(getDataFromLocalStorage(KEY_CART) ?? '[]'),
});

export const productInCartSelector = selectorFamily({
  key: 'productInCartSelector',
  get:
    (id) =>
    ({ get }) => {
      const cart = get(cartState);
      const foundProductInCart = cart.find((item: CartItem) => item.id === id);

      return foundProductInCart;
    },
});

export const cartBadgeSelector = selector({
  key: 'cartBadgeSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    const selectedProducts = new Set(cart);

    return selectedProducts;
  },
});
