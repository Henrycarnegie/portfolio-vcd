import { Navbar } from '@/components/layout/Navbar'
import ThesisPreview from '@/components/sections/thesis/ThesisPreview'

const ThesisPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
        <Navbar />
        <ThesisPreview />
    </main>
  )
}

export default ThesisPage