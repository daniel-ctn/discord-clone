import Header from 'components/layout/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
      </Routes>
    </main>
  )
}

export default App
