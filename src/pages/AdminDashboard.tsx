import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Image,
  FileText,
  Users,
  LayoutDashboard
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
}

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  
  // Blog form state
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
  });


  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
    
    // Load blog posts from localStorage
    const savedBlogs = localStorage.getItem('blogPosts');
    if (savedBlogs) {
      setBlogPosts(JSON.parse(savedBlogs));
    }
    
    // Load team members from localStorage
    const savedTeam = localStorage.getItem('teamMembers');
    if (savedTeam) {
      setTeamMembers(JSON.parse(savedTeam));
    } else {
      // Initialize with default team members
      const defaultTeam = [
        { id: '1', name: 'Adv. Dhruv Singh', role: 'Founder & Managing Partner', photo: '/team/dhruv.jpg' },
        { id: '2', name: 'Adv. Neeshu Chandpuriya', role: 'Co-Founder & Partner', photo: '/team/20260203_122546.jpg' },
        { id: '3', name: 'Adv. Prachi Sharma', role: 'Co-Founder & Partner', photo: '/team/prachi.jpg' },
      ];
      setTeamMembers(defaultTeam);
      localStorage.setItem('teamMembers', JSON.stringify(defaultTeam));
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  // Blog management functions
  const handleAddBlog = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: blogForm.title,
      excerpt: blogForm.excerpt,
      content: blogForm.content,
      author: blogForm.author,
      date: new Date().toISOString().split('T')[0],
    };
    
    const updatedPosts = [...blogPosts, newPost];
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    // Reset form
    setBlogForm({ title: '', excerpt: '', content: '', author: '' });
    setEditingBlog(null);
  };

  const handleEditBlog = (post: BlogPost) => {
    setEditingBlog(post);
    setBlogForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
    });
  };

  const handleUpdateBlog = () => {
    if (!editingBlog) return;
    
    const updatedPosts = blogPosts.map(post => 
      post.id === editingBlog.id 
        ? { ...post, ...blogForm }
        : post
    );
    
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    setEditingBlog(null);
    setBlogForm({ title: '', excerpt: '', content: '', author: '' });
  };

  const handleDeleteBlog = (id: string) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  // Team management functions
  const handleUpdateTeamPhoto = (memberId: string, photoUrl: string) => {
    const updatedTeam = teamMembers.map(member =>
      member.id === memberId
        ? { ...member, photo: photoUrl }
        : member
    );
    
    setTeamMembers(updatedTeam);
    localStorage.setItem('teamMembers', JSON.stringify(updatedTeam));
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy to-navy-light border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-primary" />
            <h1 className="font-serif text-xl font-bold text-white">
              Admin Dashboard
            </h1>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Blog Management
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team Photos
            </TabsTrigger>
          </TabsList>

          {/* Blog Management Tab */}
          <TabsContent value="blogs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
                </CardTitle>
                <CardDescription>
                  {editingBlog ? 'Update your blog post' : 'Create a new blog post'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      placeholder="Enter blog title"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      id="author"
                      value={blogForm.author}
                      onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                      placeholder="Enter author name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      placeholder="Enter short excerpt"
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      placeholder="Enter full blog content"
                      rows={6}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={editingBlog ? handleUpdateBlog : handleAddBlog}
                      className="bg-gradient-gold text-primary-foreground"
                      disabled={!blogForm.title || !blogForm.content}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {editingBlog ? 'Update Post' : 'Add Post'}
                    </Button>
                    
                    {editingBlog && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEditingBlog(null);
                          setBlogForm({ title: '', excerpt: '', content: '', author: '' });
                        }}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts List */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Blog Posts</CardTitle>
                <CardDescription>
                  Manage your existing blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {blogPosts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No blog posts yet. Add your first post above.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div
                        key={post.id}
                        className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span>By {post.author}</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditBlog(post)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteBlog(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Photos Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Team Photos Management
                </CardTitle>
                <CardDescription>
                  Update team member photos. Photos should be placed in the assets folder.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-4 border border-border rounded-lg"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {member.photo ? (
                          <img 
                            src={member.photo} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xl font-bold text-primary-foreground">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                      
                      <div className="flex-1 max-w-xs">
                        <Input
                          placeholder="Photo path (e.g., /src/assets/member1.jpg)"
                          value={member.photo}
                          onChange={(e) => handleUpdateTeamPhoto(member.id, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Instructions:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Place team photos in <code>src/assets/</code> folder</li>
                    <li>• Enter the photo path like: <code>/src/assets/member1.jpg</code></li>
                    <li>• Supported formats: JPG, PNG, WebP</li>
                    <li>• Recommended size: 400x400 pixels</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
