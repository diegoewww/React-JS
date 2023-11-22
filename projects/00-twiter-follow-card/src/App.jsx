
import { TwiterCard } from './TwiterCard'
import './App.css'
import { useState } from 'react'

export function App() {

  const users = [
    {
      userName: "diegonina",
      name: "Diego Nina",
      isFollowing: true,
    },
    {
      userName: "arlosperahn",
      name: "Carlos",
      isFollowing: true,
    },
    {
      userName: "pedroelyepas",
      name: "Pedro",
      isFollowing: false,
    }

  ]

  return (

    <section className='app'>
      {
        users.map(users => {
          const { userName, name, isFollowing } = users;
          return (
            <TwiterCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwiterCard>
          )
        })
      }
    </section>

  )
}