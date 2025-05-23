import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Container/App'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './assets/Styles/style.scss';
import ScrollToTop from './ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
    
  
)
