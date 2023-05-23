import {Routes, Route} from 'react-router-dom';

import { Details } from '../pages/Details';
import { New } from '../pages/New';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/preview/:id' element={<Details/>} />

    </Routes>
  )

}