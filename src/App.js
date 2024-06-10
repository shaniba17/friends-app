import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddFriends from './components/AddFriends';
import ViewFriends from './components/ViewFriends';

function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddFriends/>}/>
    <Route path='/view' element={<ViewFriends/>}/>
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
