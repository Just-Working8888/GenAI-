import { Route, Routes } from 'react-router-dom';
import Main from 'routes/Main/Main';
import './scss/app.scss';
import { Login, SignUp } from 'Components';
import MainPage from 'routes/MainPage/MainPage';
import Upload from 'routes/Upload/Upload';
import Result from 'routes/Result/Result';


function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/upload/:id' element={<Upload />} />
      <Route path='/result' element={<Result />} />
      <Route path='/' element={<Main />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      <Route path='*' element={<main className={'errorPage'}><p>Неверный адрес</p></main>} />
    </Routes>
  );
}


export default App;