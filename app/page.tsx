import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Welcome to our site</h2>
        <p className="mb-4">
          This is a sample landing page built with Next.js and Tailwind CSS. It includes a navigation bar,
          hero section, some body content, and a footer.
        </p>
        <p>
          Feel free to customize this page and add more sections or components as needed for your project.
        </p>
      </main>
      <Footer />
    </div>
  )
}

