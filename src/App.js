import WriteBoard from './component/WriteBoard';
import DetailBoard from './component/DetailBoard';
import ListBoard from './component/ListBoard';
import { Routes, Route } from 'react-router-dom'
import Update from './component/Update';
import BoardPage from './component/BoardPage';
import DeleteBoard from './component/DeleteBoard';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<BoardPage />} />
      <Route exact path='/write' element={<WriteBoard />} />
      <Route exact path='/detail/:id' element={<DetailBoard />} />
      <Route exact path='/update/:id' element={<Update />} />
      <Route exact path='/delete/:id' element={<DeleteBoard />} />

    </Routes>

  );
}

export default App;
