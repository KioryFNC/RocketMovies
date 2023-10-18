import styled from "styled-components";
import backgroundImg from '../../assets/movies.png';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.9;
  filter: brightness(90%);
`;