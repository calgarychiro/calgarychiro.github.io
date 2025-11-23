import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CalendarBlank } from '@phosphor-icons/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export interface BlogPost {
  id: string
  title: string
  link: string
  imageUrl: string
  date: string
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Hyaluronic Acid Injections - Lumbar Facet Joints',
    date: '2025-03-19',
    link: 'https://www.drmichaellau.ca/blog/hyaluronicacid',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1742407274271-JG34D92SGJ4TWRIMARSH/Facet-Joint-injections.jpg'
  },
  {
    id: '2',
    title: 'Pillow Choice',
    date: '2024-09-06',
    link: 'https://www.drmichaellau.ca/blog/pillow',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1725639755780-IVRE49NPGTV65OXJA7M0/kids-pillow-3+copy.jpg'
  },
  {
    id: '3',
    title: 'Mattress Type for Low Back Pain',
    date: '2024-09-06',
    link: 'https://www.drmichaellau.ca/blog/mattress',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1725639003554-0T0QM8RHQV6IFZLAF7BZ/download.jpg'
  },
  {
    id: '4',
    title: 'Plantar Fasciitis/Fasciosis',
    date: '2020-11-17',
    link: 'https://www.drmichaellau.ca/blog/plantarfasciitis',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1605633866528-SIBSWSTNZ9X2AWFLGPIV/planter-fascia2.jpg'
  },
  {
    id: '5',
    title: 'Low Back Sprain and Strain',
    date: '2020-11-11',
    link: 'https://www.drmichaellau.ca/blog/sprainstrain',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1605137920467-1RJ8DF945QDKVAM7WCK2/Picture1.png'
  },
  {
    id: '6',
    title: 'Frozen Shoulder/Adhesive Capsulitis',
    date: '2020-11-11',
    link: 'https://www.drmichaellau.ca/blog/frozenshoulder',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1605136457762-OXCZ0I54N8727T6M6HO7/Screen+Shot+2020-11-11+at+4.09.31+PM.png'
  },
  {
    id: '7',
    title: 'Custom Orthotics',
    date: '2020-05-15',
    link: 'https://www.drmichaellau.ca/blog/customorthotics',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1589573395187-2JLRVA1KR761J7F4SH51/orthotics-feet-and-sole.jpg'
  },
  {
    id: '8',
    title: 'Acupuncture/Medical Acupuncture/IMS/Dry needling',
    date: '2020-05-15',
    link: 'https://www.drmichaellau.ca/blog/medicalacupuncture',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1589572072242-HXOC2TDU4XI4OB1A7W9P/medical-acupuncture-640x427.jpg'
  },
  {
    id: '9',
    title: 'Shockwave Therapy',
    date: '2020-05-15',
    link: 'https://www.drmichaellau.ca/blog/shockwavetherapy',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1589571244491-KAZ0IZAW7UZWQELUAAF3/SW.png'
  },
  {
    id: '10',
    title: 'RockTape',
    date: '2019-08-13',
    link: 'https://www.drmichaellau.ca/blog/rocktape',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1565715706551-3K85NZ7M9VT3HME1XY9G/Rocktape.jpg'
  },
  {
    id: '11',
    title: 'Best Topical Analgesic Cream',
    date: '2019-03-26',
    link: 'https://www.drmichaellau.ca/blog/topicalcreams',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c68512894d71a0fec57c5c4/1589572989403-7XCK8QJBJT1L6VSHTCSS/Topical+Cream.jpg'
  }
]

export function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Health & Wellness Blog</h2>
            <p className="text-muted-foreground">
              Tips, insights, and news about chiropractic care
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="https://www.drmichaellau.ca/blog" target="_blank" rel="noopener noreferrer">
              View All Posts
            </a>
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {posts.map((post) => (
              <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <Card className="h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer overflow-hidden">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <CalendarBlank size={16} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <CardTitle className="text-lg line-clamp-2 leading-tight min-h-[3rem]">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <Badge variant="secondary">Read More</Badge>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  )
}
