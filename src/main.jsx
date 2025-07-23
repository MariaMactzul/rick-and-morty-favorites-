import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { UserProvider } from './components/context/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(

    <UserProvider>
      <App />
    </UserProvider>

)
