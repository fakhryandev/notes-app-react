import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddPage from './pages/AddPage'
import ArchivesPage from './pages/ArchivesPage'
import DetailPageWrapper from './pages/DetailPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
