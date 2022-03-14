import styled from 'styled-components'
//import { colors } from '../../static/colors';

export const Container = styled.div`
  background: #141414;
  width: 100vw;
  height: 100vh;
`

export const Header = styled.div`
  height: 4.25rem;
  width: (100vw - 2.625rem);
  background: linear-gradient(180deg, #000, #141414) no-repeat;
  padding: 0 2.625rem;
  display: flex;
  align-items: center;
`

export const Body = styled.div`
  height: (100vh - 4.25rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 0;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: example;
    animation-duration: 0.5s;
    @keyframes example {
      0% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
`

export const Text = styled.div`
  height: 3.625rem;
  width: 69.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  color: #fff;
  font-size: 3.5vw;
  letter-spacing: 0.3px;
  font-weight: unset;
`

export const Cards = styled.div`
  height: 12rem;
  width: 69.5rem;
  display: flex;
  justify-content: space-between;
  margin: 1.4rem 0;
`

export const Card = styled.div`
  height: 16.5rem;
  width: 12rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3vw;
  color: #808080;
  cursor: pointer;
  :hover {
    color: #fff;
    .char {
      border: 4px solid #fff;
    }
  }
`

export const ImgContainer = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 4px;
  background: linear-gradient(-30deg, #883fd1, #4682b4) no-repeat;
  margin: 0 0 1rem 0;
`

export const ManegePerfil = styled.button`
  margin: 6rem 0 1rem 0;
  padding: 0.7rem 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  background: transparent;
  border: 1px solid #808080;
  font-size: 1.3vw;
  letter-spacing: 2px;
  cursor: pointer;
  :hover{
    color: #fff;
    border: 1px solid #fff;
  }
`
