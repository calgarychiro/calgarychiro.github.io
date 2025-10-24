import { useKV } from '@github/spark/hooks'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'
import { BlogPost } from './Blog'
import { BlogAdmin } from './BlogAdmin'

export function BlogNavigator() {
  const [posts] = useKV<BlogPost[]>('blog-posts', [])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [showAdmin, setShowAdmin] = useState(false)

  const blogPosts = posts || []

  return (
    <section id="blog-navigator" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Blog</h2>
            <p className="text-muted-foreground">
              Health insights and treatment information
            </p>
          </div>
          <Button variant="outline" onClick={() => setShowAdmin(true)}>
            Manage Blog
          </Button>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No blog posts yet. Create your first post to get started.
            </p>
            <Button onClick={() => setShowAdmin(true)}>
              Create First Post
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors" />
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    }).replace(/\//g, '-')}</span>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                    {post.title}
                  </h3>
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
                    <span className="uppercase tracking-wide">{selectedPost.author}</span>
                    <span>•</span>
                    <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: '2-digit', 
                      day: '2-digit' 
                    }).replace(/\//g, '-')}</span>
                  </div>
                </DialogHeader>
                <div className="mt-6">
                  <p className="text-lg text-muted-foreground mb-6 italic">
                    {selectedPost.excerpt}
                  </p>
                  <div className="prose prose-lg max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {selectedPost.content}
                    </p>
                  </div>
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
