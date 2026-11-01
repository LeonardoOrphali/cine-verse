import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import FavoritesProvider from './context/FavoritesProvider'

import './styles/global.css'
import "./styles/pageTransitions.css"

createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <RouterProvider router={router}/>
  </FavoritesProvider>
)
