import { ThemeProvider } from 'styled-components';
import Dashboard from 'pages/Dashboard';
import { InventoryProvider } from 'hooks/useInventory';
import GlobalStyles from 'styles/global';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InventoryProvider>
        <Dashboard />
      </InventoryProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
