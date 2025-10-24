import { useKV } from '@github/spark/hooks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'
import { CalendarBlank } from '@phosphor-icons/react'
import { BlogAdmin } from './BlogAdmin'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
}

export function Blog() {
  const [posts] = useKV<BlogPost[]>('blog-posts', [])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [showAdmin, setShowAdmin] = useState(false)

  const blogPosts = posts || []

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
          <Button variant="outline" onClick={() => setShowAdmin(true)}>
            Manage Blog
          </Button>
        </div>

        {blogPosts.length === 0 ? (
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardContent className="p-12">
              <p className="text-lg text-muted-foreground mb-4">
                No blog posts yet. Check back soon for health tips and wellness insights!
              </p>
              <Button onClick={() => setShowAdmin(true)}>
                Create Your First Post
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarBlank size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            {selectedPost && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl mb-4">
                    {selectedPost.title}
                  </DialogTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>By {selectedPost.author}</span>
                    <span>•</span>
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                </DialogHeader>
                <div className="prose prose-lg max-w-none mt-6">
                  <p className="whitespace-pre-wrap">{selectedPost.content}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <BlogAdmin open={showAdmin} onOpenChange={setShowAdmin} />
      </div>
    </section>
  )
}
