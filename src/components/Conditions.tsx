import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const specificConditions = [
  'Poor Posture',
  'Chronic Pain',
  'Nerve Pain',
]

const generalConditions = [
  'Neck, Upper, Middle or Low Back Pain',
  'Disc Herniation/Sciatica (i.e. Numbness and Tingling, Weakness)',
  'Whiplash and Motor Vehicle Accident Injuries',
  'Shoulder, Elbow, Wrist and/or Hand Pain',
  'Pelvis, Hip, Knee, Ankle, and/or Foot Pain',
  'Postural Dysfunction and Related Pain',
  'General Health and Well-being',
  'Stress-Related Muscle Tension',
  'Frozen Shoulder, Jaw Pain',
  'Tennis/Golfers Elbow',
  'Plantar Fasciitis',
  'Sport Injuries',
  'Chronic Pain',
  'Headaches',
  'Migraines',
  'Arthritis',
  'Bursitis',
]

export function Conditions() {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Conditions Treated</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive chiropractic care for a wide range of conditions
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Specific Conditions Treated
                <Badge variant="secondary">Featured</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {specificConditions.map((condition, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-foreground/90"
                  >
                    <span className="text-accent font-bold mt-1">•</span>
                    {condition}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>General Conditions Treated</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {generalConditions.map((condition, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-foreground/80"
                  >
                    <span className="text-primary mt-1">•</span>
                    {condition}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
