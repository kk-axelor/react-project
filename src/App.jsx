import Chat from "./components/chat/Chat"
import Details from "./components/detail/Details"
import List from "./components/list/List"
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
     <Details/>
     
    </div>
  )
}

export default App