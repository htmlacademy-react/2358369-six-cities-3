import FrontPage from '../../pages/front-page/front-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/PrivateRoute';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage offersCount={offersCount}/>}/>
        <Route
          path='/favorites'
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
        <Route path='/offer/:id' element={<OfferPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
