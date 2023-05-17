import styled from 'styled-components';
import {Button} from '../../component/Button/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBox = styled.div`
  width: 700px;
  height: 400px;
  box-shadow: 2px 2px 10px #aaa;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  >${Button}{
    width: 150px;
    height: 50px;
    border: none;
    background: #333;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    transition: .3s;
  }
  >${Button}:hover{
    color: #333;
    border: solid 1px #333;
    background: #fff;
  }
`;

export const Title = styled.h3`
  color: #333;
  font-size: 40px;
`;