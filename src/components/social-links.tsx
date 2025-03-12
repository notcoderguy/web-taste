import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com/notcoderguy/web-taste" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
    </div>
  )
}

