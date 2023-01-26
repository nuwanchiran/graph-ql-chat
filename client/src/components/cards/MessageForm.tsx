import {gql, useMutation} from '@apollo/client'
import {ChangeEventHandler, FormEventHandler, useState} from 'react'

const POST_MESSAGE = gql`
  mutation($user:String!,$content:String!){
    postMessage(user:$user,content:$content)
  }
`
type Props = {}

type FormState = {user: string, content: string}

const initForm = {
  user: 'chiran',
  content: ''
}

const MessageForm = ( props: Props ) => {
  const [form, setForm] = useState<FormState>( initForm )
  const [postMessage] = useMutation( POST_MESSAGE )

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = ( e ) => {
    const {name, value} = e.target
    setForm( prev => ( {...prev, [name]: value} ) )
  }

  const handleSubmit: FormEventHandler = ( e ) => {
    e.preventDefault()
    if ( form.content.length > 0 ) {
      postMessage( {variables: form} )
      setForm( prev => ( {...prev, content: ''} ) )
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 5
      }}
    >
      <input
        type="text"
        name="user"
        id="user"
        value={form.user}
        onChange={handleFormChange}
        style={{
          width: 60,
          border: '1px solid #ddd'
        }}
      />
      <input
        type="text"
        name="content"
        id="content"
        autoComplete='off'
        value={form.content}
        onChange={handleFormChange}
        style={{
          flexGrow: 1,
          border: '1px solid #ddd'
        }}
      />
      <input
        type="submit"
        value="Send"
        disabled={!( form.content.length > 0 )}
        style={{
          border: 'none',
          color: ( form.content.length > 0 ) ?'white':'black',
          backgroundColor: ( form.content.length > 0 ) ? 'dodgerblue':'#ddd',
          fontSize: 12,
          padding: 5,
          width: 50,
          cursor: ( form.content.length > 0 ) ? "pointer" : 'not-allowed',
          borderRadius: 10,
        }}
      />
    </form>
  )
}

export default MessageForm