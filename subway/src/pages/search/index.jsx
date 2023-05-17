import * as S from './styled';
import { useState, useEffect } from 'react';
import Button from '../../component/Button/index';
import SearchInput from './searchInput/index';
import {stationList} from '../../contants/station_list';
import ListItem from './listItem/index';

function Search(){
  const [value, setValue] = useState("");
  const [auto, setAuto] = useState([{}]);
  const sort_stationList = stationList.data.sort((a, b) => {
    return a.station_nm < b.station_nm ? -1 : a.station_nm > b.station_nm ? 0 : 1;
  });

  const handleFrom = (e) => {
    e.preventDefault();
  }

  return(
    <S.Wrap>
      <S.Header><S.H1>역정보 검색 시스템</S.H1></S.Header>
      <S.Content>
        <S.Search>
          <S.From onSubmit={handleFrom}>
            <SearchInput onChange={setValue} onKeyDown={setAuto} />
            <Button type="button">검색</Button>
          </S.From>
        </S.Search>
        <S.Autocomplete> 
          <ListItem sort_stationList={sort_stationList} value={value} />
        </S.Autocomplete>
        <S.Timer>
          <S.H2>Copyright &copy; Webskills, 2016</S.H2>
        </S.Timer>
        <S.Result></S.Result>
      </S.Content>
    </S.Wrap>
  );
}

export default Search;