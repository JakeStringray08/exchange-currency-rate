import React from 'react';

import Router from './modules/Router';
import Auth from './modules/Auth';

const App = () => {
  return (
    <div>
      <Router />
      <Auth />
    </div>
  );
}

export default App;
