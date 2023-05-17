import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main/index.jsx';
import Search from './search/index.jsx';

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;