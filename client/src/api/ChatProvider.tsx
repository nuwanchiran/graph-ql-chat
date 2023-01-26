import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {WebSocketLink} from "@apollo/client/link/ws";

const link = new WebSocketLink( {
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true
  }
} )

const client = new ApolloClient( {
  link,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
} )

type Props = {
  children: any
}

const ChatProvider = ( props: Props ) => {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}

export default ChatProvider