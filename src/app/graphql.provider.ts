import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from './environments/environment';

const uri = 'http://51.20.138.202:8087/query'; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  let token = '';
  if(typeof localStorage !== 'undefined'){
    token = localStorage.getItem(`${environment.cend_default_lang_id}_tkn`) || '';
  }

  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}` ,
    }
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
