import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Michael Lau Chiropractic</h3>
              <p className="text-primary-foreground/80">
                Professional chiropractic care serving Calgary and the surrounding community.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#home" className="hover:text-primary-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#conditions" className="hover:text-primary-foreground transition-colors">
                    Conditions Treated
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-primary-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>3604 52 Ave NW #108</li>
                <li>Calgary, AB T3L 0V9</li>
                <li>
                  <a href="tel:4037834004" className="hover:text-primary-foreground transition-colors">
                    (403) 783-4004
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8 bg-primary-foreground/20" />
          
          <div className="text-center text-primary-foreground/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Michael Lau Chiropractic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
