import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/platform/Navbar'
import { CustomCursor } from '@/components/platform/CustomCursor'
import { HomePage } from '@/components/platform/HomePage'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App