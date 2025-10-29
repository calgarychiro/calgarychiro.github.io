import { Card, CardContent } from '@/components/ui/card'
import headshotImage from '/data/michael/Headshots+with+White+Coat+(1+of+3).webp'

export function About() {
  const educationItems = [
    'Bachelor of Kinesiology (Distinction) - University of Calgary',
    'Doctor of Chiropractic - Canadian Memorial Chiropractic College',
    'Contemporary Medical Acupuncture - McMaster University Department of Anesthesia',
    'Concussion Management - Complete Concussion Management Inc.',
    'Concussion: Prevention, Detection and Management - University of Calgary and Université Laval',
    'Sports Medicine 2021 CME - Harvard University',
    'Sports Medicine 2024 CME - Harvard University',
    'Dynamic Neuromuscular Stabilization Exercise Course Part 1 - DNS',
    'Functional Gait Assessment Level 1 - Gait Happens',
    'NDS Upper and Lower Quarter 1 - Neurodynamic Solutions',
    'F.I.F.A Foundations in Neurofunctional Assessment - Skills in Hand by Dr. Mike Prebeg',
    'EXSTORE Assessment System - Dr. Anthony Lombardi',
    'NeuroKinetic Therapy Level 1 - David Weinstock',
    'Functional Range Release Technique - Functional Anatomy Seminars',
    'Trigonics Knee Course Plus - Trigonics Institute of Functional Neurology',
    'Thompson Technique Seminar Series - Thompson Technique Seminar Series',
    'Rock Tape Fascial Movement Taping Basic - RockTape Canada',
    'Rock Tape Fascial Movement Taping Performance - RockTape Canada',
    'S.M.A.R.T Tools - SMART Tools Plus LLC',
    'Functional Biomechanical Assessment Seminar 2018 - Murray | Bell Seminars',
    'Functional Biomechanical Assessment Seminar 2019 - Murray | Bell Seminars',
    'Medical Imaging Anatomy Course - Radiopaedia.org',
    'X-ray Interpretation: Lumbar Spine',
    'X-ray Interpretation: Pelvis & Hip Injuries',
    'Trauma Radiology Course - Radiopaedia.org',
    'Emergency Radiology Course - Radiopaedia.org',
    'Mental Health First Aid 2017 - CMCC',
    'Standard First Aid with CPR-C and AED 2024 - St. John Ambulance',
    'Basic Life Support 2025 - St. John Ambulance'
  ]

  const licenses = [
    'Canadian Board Certified Doctor of Chiropractic',
    'McMaster Contemporary Medical Acupuncture Graduate',
    'College of Chiropractors of Alberta',
    'Chiropractic Association of Alberta',
    'Canadian Chiropractic Association',
    'Chiropractic Protective Association'
  ]

  const volunteering = [
    'Examination Staff - Canadian Chiropractic Examining Board (2022-Current)',
    'Admissions Assessor - Canadian Memorial Chiropractic College (2019-Current)'
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[300px,1fr] gap-8 md:gap-12 mb-12">
            <div className="flex justify-center md:justify-start">
              <div className="w-full max-w-[300px] aspect-square bg-muted rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={headshotImage} 
                  alt="Dr. Michael Lau" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Dr. Michael Lau, B.Kin, C.MAG, D.C</h2>
                <p className="text-sm text-muted-foreground mb-4">Spoken Languages: English and Cantonese</p>
              </div>
              
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Welcome to my website! I'm Michael Lau, a native of Golden, British Columbia. My journey into chiropractic care began after my initial treatment in Calgary, Alberta. As a student, I grappled with chronic low back and neck pain, assuming it was a common experience during the stressful exam periods. In my final year at the University of Calgary, when the pain became unbearable, I sought chiropractic care and was astounded by the transformative effects of chiropractic care. From that first treatment, I became an advocate of natural healthcare. Recognizing the potential to provide others with this quality care, I found my calling in the fulfilling profession of chiropractic.
                </p>
                <p>
                  Following my graduation from the University of Calgary with Distinction with Kinesiology, I chose to further my education in chiropractic at Canadian Memorial Chiropractic College in Toronto, Ontario. During my clinical internship, I had the privilege of being nominated as one of 13 chiropractors to volunteer abroad in the Dominican Republic. While there, I provided essential healthcare and chiropractic services to an underserved population. This transformative experience not only refined my non-verbal communication skills but also deepened my understanding of diverse cultural backgrounds and the role chiropractic plays in supporting neurological conditions and injuries. It was during this time that I discovered my passion for neurological conditions and particularly those related to the spine.
                </p>
                <p>
                  Beyond my professional responsibilities, I maintain an active lifestyle through marathon running and road cycling, and I am committed to international volunteering. Over the past years, I have been involved with medical treatment initiatives in Honduras, Uganda, the Dominican Republic, and Asia, experiences that have strengthened my cross-cultural awareness, adaptability, and collaborative skills.
                </p>
                <p>
                  I am eager to be a part of your journey towards a pain-free and optimized lifestyle - You deserve to move the way you want.
                </p>
                <p className="text-right italic mt-6">
                  Yours in health,<br />
                  <span className="font-semibold">Dr. Michael Lau</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 mt-16">
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-4">Education/Certifications + Courses:</h3>
                <ul className="space-y-3">
                  {educationItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-4">Active Professional Licenses/ Memberships</h3>
                <ul className="space-y-3">
                  {licenses.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-4">Active Volunteering</h3>
                <ul className="space-y-3">
                  {volunteering.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center py-8">
              <p className="text-2xl md:text-3xl font-serif italic text-foreground/80">
                "Unlock Your Pain | Unlock Your Health"
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Dr. Michael Lau</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
