import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/app-layout'
import { ThemeProvider } from '@/components/theme-provider'

import { HomePage } from '@/pages/home'
import { AboutPage } from '@/pages/about'
import { ProjectsPage } from '@/pages/projects'
import { ContactPage } from '@/pages/contact'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
