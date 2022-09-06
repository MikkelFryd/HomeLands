import { AppRouter } from './components/routing/Routing';
import { BrowserRouter } from 'react-router-dom'
import '../src/assets/scss/vars.scss'
import './app.scss'
import { AuthProvider } from './components/context/auth/Auth';
import { HouseProvider } from './components/context/houses/Housing';

function App() {
  return (
    <AuthProvider >
      <HouseProvider>
          <BrowserRouter>
            <AppRouter>
            </AppRouter>
          </BrowserRouter>
      </HouseProvider>
    </AuthProvider>
  );
}

export default App;
