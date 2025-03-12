import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { SocialLinks } from "@/components/social-links"
import { Logo } from "@/components/logo"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex min-h-screen flex-col">
        <header className="flex items-center justify-between py-4 px-4">
          <Logo />
          <div className="flex items-center gap-4">
            <SocialLinks />
            <ModeToggle />
          </div>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Web Taste</h1>
          <h2 className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">TailwindCSS + Vite</h2>
          <p className="mt-6 max-w-[42rem] text-muted-foreground">
            Here is your Tailwind-Vite-Shadcn template. The file you're looking at is the `src/App.tsx` file in the
            repository you just cloned.
          </p>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

