
export const resetLocalStorage = () =>{
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const saveLocalStorage = ({board, turn}) =>{
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}