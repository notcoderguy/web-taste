import ReactLogo from '@/assets/react.svg'

export function Logo() {
    return (
      <a href="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
          <img
            src={ReactLogo}
            alt="WebTaste Logo"
            className="h-6 w-6"
          />
        </div>
        <span className="font-bold">WebTaste</span>
      </a>
    )
  }
  