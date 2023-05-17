import * as S from './styled';
import {Link} from "react-router-dom";
import Button from '../../component/Button/index';

function Main(){
  return(
    <S.Container>
      <S.MainBox>
        <S.Title>Subway Search</S.Title>
        <Button>
          <Link to="search">Try it !</Link>
        </Button>
      </S.MainBox>
    </S.Container>
  );
}

export default Main;