import './App.css'
import MessageForm from './components/cards/MessageForm'
import MessageWindow from './components/cards/MessageWindow'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
      gap: 20,
      height: '100vh'
    }}>
      <div style={{
        width: 400,
        marginTop: 50,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        borderRadius: 5,
        boxShadow: '2px 2px 5px #eee,-2px -2px 5px #eee'
      }}>
        <h3>Messages</h3>
        <MessageWindow />
        <MessageForm />
      </div>
    </div>
  )
}

export default App
