import { useState } from "react"
export function TwiterCard({ userName, children, initialIsFollowing }) {
  const userAt = `@${userName}`

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article>
      <header>
        <img src={`https://unavatar.io/instagram/${userName}`} alt="avatar" />
        <div>
          <strong>{children}</strong>
          <span>
            {userAt}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">
            {text}
          </span>
          <span className="stopFollow">
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  )
}
