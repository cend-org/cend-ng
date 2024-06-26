import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { environment } from './environments/environment';

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  let token = '';
  if(typeof localStorage !== 'undefined'){
    token = localStorage.getItem(`${environment.cend_default_lang_id}_tkn`) || '';
  }

  return {
    link: httpLink.create(
      { 
        uri: `${environment.api_host}/query`,
      }),
    cache: new InMemoryCache(),
  };
}
 
export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
function setContext(arg0: (_: any, { headers }: { headers: any; }) => { headers: any; }) {
  throw new Error('Function not implemented.');
}

