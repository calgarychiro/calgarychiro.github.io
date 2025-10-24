import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Plus, Trash, Pencil } from '@phosphor-icons/react'
import { BlogPost } from './Blog'
import { toast } from 'sonner'

interface BlogAdminProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BlogAdmin({ open, onOpenChange }: BlogAdminProps) {
  const [posts, setPosts] = useKV<BlogPost[]>('blog-posts', [])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [showEditor, setShowEditor] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    tags: '',
  })

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      tags: '',
    })
    setEditingPost(null)
    setShowEditor(false)
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      tags: post.tags.join(', '),
    })
    setShowEditor(true)
  }

  const handleDelete = (id: string) => {
    setPosts((currentPosts) => (currentPosts || []).filter((p) => p.id !== id))
    toast.success('Post deleted successfully')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const post: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      author: formData.author,
      date: editingPost?.date || new Date().toISOString(),
      tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
    }

    if (editingPost) {
      setPosts((currentPosts) =>
        (currentPosts || []).map((p) => (p.id === editingPost.id ? post : p))
      )
      toast.success('Post updated successfully')
    } else {
      setPosts((currentPosts) => [post, ...(currentPosts || [])])
      toast.success('Post created successfully')
    }

    resetForm()
  }
  
  const blogPosts = posts || []

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Blog Posts</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Button onClick={() => setShowEditor(true)} className="w-full">
              <Plus className="mr-2" />
              Create New Post
            </Button>

            <div className="space-y-4">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{post.title}</span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(post)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(post.date).toLocaleDateString()} • {post.author}
                    </p>
                  </CardContent>
                </Card>
              ))}

              {blogPosts.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No posts yet. Create your first one!
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showEditor} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? 'Edit Post' : 'Create New Post'}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                required
              />
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                required
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="wellness, back pain, posture"
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {editingPost ? 'Update Post' : 'Create Post'}
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
