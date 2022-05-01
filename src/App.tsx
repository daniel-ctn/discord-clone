import { Route, Routes } from 'react-router-dom'

import HomePage from 'pages/Home'
import Header from 'components/layout/Header'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </main>
  )
}

export default App
