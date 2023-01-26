import {gql, useSubscription} from '@apollo/client'
import {Message} from '../../types/Message'
import MessageBody from '../atoms/MessageBody'

const ME = 'chiran'

const MESSAGE_QUERY = gql`
subscription{
    messages{
      id
      content
      user
    }
  }
`


type Props = {}

const MessageWindow = ( props: Props ) => {
  const {loading, error, data} = useSubscription( MESSAGE_QUERY )
  if ( loading ) return <p>Loading...</p>
  if ( error ) return <p>Error :</p>
  return (
    <div
      style={{
        height: '60vh',
        overflow: 'hidden',
        marginBottom: 20,
        padding: 20,
        overflowY: 'scroll'
      }}
    >
      {data.messages.map( ( message: Message ) => <MessageBody
        me={message.user.toLowerCase() === ME.toLowerCase()}
        key={message.id}
        {...message}
      /> )}
    </div>
  )
}

export default MessageWindow