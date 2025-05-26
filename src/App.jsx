import './styles/app.scss'
import { init } from './scripts/resizeHeight'
import Main from './pages/main/main.page'
import Menu from './components/menu/menu.component'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    init()
  }, [])

  return (
    <div id="app">
      <Menu />
      <Main />
    </div>
  )
}

export default App
