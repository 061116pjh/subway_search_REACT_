import * as S from './styled';

function List(props){
  const {station_nm, line_num, value} = props;
  console.log(value);
  return (
    <S.List>
      <S.Content>{station_nm}</S.Content>
      <S.Content>{line_num}</S.Content>
    </S.List>
  );
}

export default List;