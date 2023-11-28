import { useState, useEffect } from "react"

export function useCatImage({ fact }) {

  const [img, setImg] = useState()
  useEffect(() => {
    if (!fact) return
    const factThreWords = fact.split(" ", 3).join(" ")
    fetch(`https://cataas.com/cat/says/${factThreWords}?fontSize=50&fontColor=red`)
      .then(res => {
        const { url } = res
        setImg(url)
      })
  }, [fact])

  return { imgURL: img }
}