import { css, styled } from 'styled-components';
import Button from '../components/common/Button';

const Order = () => {
  return (
    <S.Wrapper>
      <S.Title>결제예상금액</S.Title>
      <ul>
        <S.List>
          총 상품가격<span>21,700원</span>
        </S.List>
        <S.List>
          총 배송비 <span>3,000원</span>
        </S.List>
        <S.List>
          총 주문금액<span>24,700원</span>
        </S.List>
      </ul>
      <Button css={orderButtonStyle}>주문하기</Button>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    max-width: 448px;
    padding-bottom: 38px;
    border: 1px solid var(--gray-color-100);
  `,

  Title: styled.h3`
    padding: 24px 30px;
    margin-bottom: 34px;
    border-bottom: 3px solid var(--gray-color-100);
    font-size: 24px;
  `,

  List: styled.li`
    display: flex;
    justify-content: space-between;
    margin: 0 30px 20px;
    font-size: 20px;
    font-weight: 700;

    &:last-child {
      margin: 42px 30px 44px;
    }
  `,
};

const orderButtonStyle = css`
  width: calc(100% - 60px);
  padding: 26px 120px;
  margin: 0 30px;
  background: var(--text-color);
  font-size: 24px;
  color: #fff;
`;

export default Order;
