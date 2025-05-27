import './styles/app.scss'
import { init } from './scripts/resizeHeight'
import Footer from './components/footer/footer.component'
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
      <Footer />
    </div>
  )
}

export default App
