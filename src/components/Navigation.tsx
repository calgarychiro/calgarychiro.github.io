import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { List } from '@phosphor-icons/react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONDITIONS TREATED', href: '#conditions' },
  { label: 'SERVICES', href: '#services' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            ML
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button asChild>
              <a href="https://nwcalgarychiro.janeapp.com/#/staff_member/7" target="_blank" rel="noopener noreferrer">
                Book Online
              </a>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center gap-4 md:hidden">
              <Button asChild size="sm">
                <a href="https://nwcalgarychiro.janeapp.com/#/staff_member/7" target="_blank" rel="noopener noreferrer">
                  Book Online
                </a>
              </Button>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <List className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
