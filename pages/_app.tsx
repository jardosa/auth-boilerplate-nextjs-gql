import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '../components/common/MainLayout';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../core/createApolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default MyApp;
