import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PATH } from '../../constants/';
import Cart from '../Cart';
import CartIcon from '../icons/CartIcon';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigator = useNavigate();
  const location = useLocation().pathname;

  const goToMainPage = () => {
    if (location !== PATH.MAIN_PAGE) navigator(PATH.MAIN_PAGE);
  };

  return (
    <S.Header>
      <S.Wrapper>
        <S.Button onClick={goToMainPage}>
          <CartIcon aria-label="logo-cart-icon" />
          <span>{title}</span>
        </S.Button>
        <Cart />
      </S.Wrapper>
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    width: 100%;
    height: 80px;
    margin-bottom: 62px;
    background: var(--text-color);
    font-size: 34px;
    font-weight: 900;
    line-height: 80px;
    letter-spacing: 0.2px;

    & svg {
      width: 44px;
      height: 36px;
      margin-right: 20px;
      fill: #fff;
    }

    @media (max-width: 768px) {
      font-size: 28px;

      & svg {
        width: 40px;
        margin-right: 16px;
      }
    }

    @media (max-width: 480px) {
      font-size: 24px;

      & svg {
        width: 34px;
        margin-right: 8px;
      }
    }
  `,

  Button: styled.button`
    color: #fff;
    background: none;
    cursor: pointer;
  `,

  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 20px;
  `,
};

export default Header;
