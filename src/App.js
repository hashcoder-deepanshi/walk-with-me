// routes
import Router from './routes';
// theme
import "./App.css"
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import { AuthContextProvider } from './Firebase/AuthContext';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />           
      <AuthContextProvider>
          <Router />
      </AuthContextProvider>

    </ThemeProvider>
  );
}
