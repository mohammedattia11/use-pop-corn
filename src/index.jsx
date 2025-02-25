import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';

// import StartRating from './StartRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <StartRating messages={[
      'Terrible',
      'Bad',
      'Okay',
      'Good',
      'Great',
    ]}/> */}
  </React.StrictMode>
);
