import * as S from './styled';
import './style.css';

function SearchInput({onChange, onKeyDown }){
  let index = 0;
  const handleInputValue = ({target: {value}}) => {
    onChange(value);
  }
  const arrowDown = ({code}) => {
    if(code === "ArrowDown"){
      const $lis = document.querySelectorAll("li");
      if($lis.length !== 0){
        $lis.forEach(e => {
          e.classList.remove("active");
        });
        $lis[index].classList.add("active");
        if(index === $lis.length-1) index = 0;
        else index++;
        // onKeyDown($lis);
      }
    };
  }
  return(
    <S.Input type='text' placeholder='역이름으로 검색해보세요' onChange={handleInputValue} onKeyDown={arrowDown} autoFocus />
  );
}

export default SearchInput;