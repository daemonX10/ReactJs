import './App.css'
import Card from './components/Card'
import VerticalCard from './components/VerticalCard'

function App() {
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 font-bold  '>
      TailWind Test
    </h1>
    <Card username="YOU" btnText='Click Me' />
    <Card username="React" btnText='Visit' />
      <VerticalCard imgSrc="https://avatars.githubusercontent.com/u/115637298?v=4" message="There is Nothing , but Nothing is Better Than Non-sense . Myself " hashtag={["#you","#me","#forever"]}/>
    </>
  )
}

export default App
