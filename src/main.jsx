import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Suppress noisy dev warnings in local development only
if (import.meta.env.MODE === 'development') {
  const suppressedPhrases = [
    'Download the React DevTools for a better development experience',
    'Using UNSAFE_componentWillMount in strict mode is not recommended',
    'React Router Future Flag Warning',
    'Relative route resolution within',
  ];

  const originalWarn = console.warn;
  const originalError = console.error;
  const originalLog = console.log;

  console.warn = (...args) => {
    const first = String(args[0] ?? '');
    if (suppressedPhrases.some((p) => first.includes(p))) return;
    originalWarn(...args);
  };

  console.error = (...args) => {
    const first = String(args[0] ?? '');
    if (suppressedPhrases.some((p) => first.includes(p))) return;
    originalError(...args);
  };

  console.log = (...args) => {
    const first = String(args[0] ?? '');
    if (suppressedPhrases.some((p) => first.includes(p))) return;
    originalLog(...args);
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 