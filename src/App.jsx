import React from 'react';
import MainLayout from './layouts/MainLayout/MainLayout';
import Routes from './Routes';
import SearchContextProvider from './providers/SearchProvider';

function App() {
  return (
    <SearchContextProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </SearchContextProvider>
  );
}

export default App;
