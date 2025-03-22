import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {HomeScreen} from './src/screens';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}
