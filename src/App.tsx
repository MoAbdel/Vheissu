import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/platform/Navbar'
import { HomePage } from '@/components/platform/HomePage'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App