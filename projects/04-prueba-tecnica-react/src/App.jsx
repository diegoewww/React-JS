import { useState, useEffect } from "react"
import "./App.css"

const CAT_FACT_URL = "https://catfact.ninja/fact"
// const CAT_FACT_URL_IMG = `https://cataas.com/cat/says/${info}`

export function App() {

  const [fact, setFact] = useState()
  const [img, setImg] = useState()


  useEffect(() => {
    fetch(CAT_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const factThreWords = fact.split(" ", 3).join(" ")
    fetch(`https://cataas.com/cat/says/${factThreWords}?fontSize=50&fontColor=red`)
      .then(res => {
        const { url } = res
        setImg(url)
      })
  }, [fact])

  const handleClick = () => {
    fetch(CAT_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Otro gato</button>
      <section>
        <p>{fact}</p>
        <img src={img} alt="" />
      </section>
    </main>
  )
}