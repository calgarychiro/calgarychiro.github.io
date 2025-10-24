const conditions = [
  'Poor Posture',
  'Peri-Scapular Pain',
  'Sacroiliac Joint Pain/Dysfunction',
  'Chronic Pain',
  'Nerve Pain',
  'Scoliosis',
  'Headaches',
  'Migraine Headaches',
  'Frozen Shoulder',
  'Jaw Pain',
  'Chronic Neck, Upper, Middle or Low Back Pain',
  'Disc Herniation/Sciatica (e.g. Numbness and Tingling, Weakness)',
  'Whiplash and Motor Vehicle Accident Injuries',
  'Shoulder, Elbow, Wrist and/or Hand Pain',
  'Pelvis, Hip, Knee, Ankle, and/or Foot Pain',
  'Postural Dysfunction and Related Pain',
  'General Health and Well-being',
  'Stress-Related Muscle Tension',
  'Tennis/Golfer\'s Elbow',
  'Plantar Fasciitis',
  'Sport Injuries',
  'Arthritis',
  'Bursitis',
]

export function Conditions() {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-16 tracking-wide">Conditions Treated</h2>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {conditions.map((condition, index) => (
              <li
                key={index}
                className="text-center text-base md:text-lg text-foreground/90 font-light"
              >
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
