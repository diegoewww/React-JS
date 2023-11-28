import { useCatImage } from "../hooks/useCatImage"


export function Otro() {
  const { imgURL } = useCatImage({ fact: "hola" })
  return (
    <section>
      <img src={imgURL} alt="" />
    </section>
  )
}