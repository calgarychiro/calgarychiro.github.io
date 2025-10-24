import { Card, CardContent } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Dr. Michael Lau</h2>
          
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Dr. Michael Lau is a dedicated chiropractor serving the Calgary community with a passion for holistic health and patient-centered care. With years of experience in treating a wide range of musculoskeletal conditions, Dr. Lau combines traditional chiropractic techniques with modern evidence-based approaches.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  His philosophy centers on treating the whole person, not just the symptoms. Through comprehensive assessments and personalized treatment plans, Dr. Lau helps patients achieve optimal health and wellness.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Whether you're dealing with chronic pain, recovering from an injury, or seeking preventive care, Dr. Lau takes the time to listen to your concerns and develop a treatment approach that works for you.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
