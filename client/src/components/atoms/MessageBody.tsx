import {Message} from '../../types/Message'

type Props = Message & {
  me: boolean
}

const MessageBody = ( props: Props ) => {
  return (
    <div style={{
      width: '100%',
      textAlign: 'right',
      display: 'flex',
      justifyContent: props.me ? 'flex-end' : 'flex-start',
    }}>
      <p
        style={{
          background: props.me ? 'yellowgreen' : '#eee',
          padding: 10,
          borderRadius: 15,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexDirection: props.me ? 'row-reverse' : 'row',
        }}
      >
        <span style={{
          fontSize: 12,
          fontWeight: 'bold',
          display: props.me ? 'none' : ''
        }}>{props.user}</span>
        <span>{props.content}</span>
      </p>
    </div>
  )
}

export default MessageBody