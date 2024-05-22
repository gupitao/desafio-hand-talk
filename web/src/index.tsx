import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/typescale.scss';
import './styles/darkTheme.scss';
import './styles/lightTheme.scss';
import App from './pages/App';
import { Header } from './components/commons/header/Header';
import { Footer } from './components/commons/footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const header = ReactDOM.createRoot(
  document.getElementById('header') as HTMLElement
);

const footer = ReactDOM.createRoot(
  document.getElementById('footer') as HTMLElement
);

header.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
)


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)