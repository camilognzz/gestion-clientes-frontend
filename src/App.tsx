import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ListClients } from './components/ListClients'
import { AddClient } from './components/AddClient'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className=''>
          <Routes>
            <Route path='/' element={<ListClients />}></Route>
            <Route path='/clientes' element={<ListClients />}></Route>
            <Route path='/add-cliente' element={<AddClient />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
