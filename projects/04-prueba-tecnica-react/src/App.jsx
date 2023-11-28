import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from "./components/Otro"

import "./App.css"


export function App() {

  const { fact, refreshFact } = useCatFact()
  const { imgURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Otro gato</button>
      <section>
        <p>{fact}</p>
        <img src={imgURL} alt="" />
      </section>
      <Otro />
    </main>
  )
}