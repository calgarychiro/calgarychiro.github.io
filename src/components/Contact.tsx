import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MapPin, Clock } from '@phosphor-icons/react'

const hours = [
  { day: 'Monday', hours: 'CLOSED' },
  { day: 'Tuesday', hours: '10am-6pm' },
  { day: 'Wednesday', hours: 'CLOSED' },
  { day: 'Thursday', hours: '12pm-8pm' },
  { day: 'Friday', hours: '10am-3pm' },
  { day: 'Saturday', hours: '9am-2pm' },
  { day: 'Sunday', hours: 'CLOSED' },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visit Us</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">NW Chiropractic & Massage</p>
                    <p className="text-muted-foreground">
                      3604 52 Ave NW #108
                      <br />
                      Calgary, AB T3L 0V9
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Phone Number</p>
                    <a
                      href="tel:4037834004"
                      className="text-accent hover:underline"
                    >
                      (403) 783-4004
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold mb-1">Fax Number</p>
                    <p className="text-muted-foreground">(403) 679-8206</p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-8 bg-accent hover:bg-accent/90" size="lg" asChild>
                <a
                  href="https://nwcalgarychiro.janeapp.com/#/staff_member/7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Online
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="text-accent" size={24} />
                Hours of Operation
              </h3>
              
              <div className="space-y-3">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="font-medium">{item.day}</span>
                    <span
                      className={
                        item.hours === 'CLOSED'
                          ? 'text-muted-foreground'
                          : 'text-foreground font-medium'
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.7441396263884!2d-114.19504892348398!3d51.13146497172986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ee7179612ad%3A0xc34351633519349e!2s3604%2052%20Ave%20NW%20%23108%2C%20Calgary%2C%20AB%20T3L%200V9!5e0!3m2!1sen!2sca!4v1710360000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </div>
    </section>
  )
}
