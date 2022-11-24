import logo from './logo.svg';
import './App.css';
import WriteBoard from './component/WriteBoard';
import DetailBoard from './component/DetailBoard';
import ListBoard from './component/ListBoard';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<ListBoard/>}/>
      <Route exact path='/write' element={<WriteBoard/>}/>
     <Route exact path='/detail' element={<DetailBoard/>}/>
  </Routes>

  );
}

export default App;
