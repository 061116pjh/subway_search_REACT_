import * as S from './styled';
import List from '../../../component/List/index';

function ListItem({sort_stationList, value}){
  if(value !== null && value !== ""){
  return(
    <S.Ul>
     {
        sort_stationList
        .filter(({station_nm}) => station_nm.includes(value))
        .filter((v, i) => i <= 9)
        .map(({station_nm, station_cd, line_num}) => {
          return <List key={station_cd} station_nm={station_nm} line_num={line_num} value={value}></List>;
        })
      }
    </S.Ul>
  )
  }
}

export default ListItem;