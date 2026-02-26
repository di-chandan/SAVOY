import { CartProvider } from './CartContext.jsx';
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;