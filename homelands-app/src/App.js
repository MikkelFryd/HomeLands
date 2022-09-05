import { AppRouter } from './components/routing/Routing';
import { BrowserRouter } from 'react-router-dom'
import '../src/assets/scss/vars.scss'
import './app.scss'
import { AuthProvider } from './components/context/auth/Auth';

function App() {
  return (
    <AuthProvider >
      <BrowserRouter>
        <AppRouter>
        </AppRouter>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
