import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ImageIcon, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">AgriAI</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/profile">
                    <Button variant="ghost">Profile</Button>
                  </Link>
                  <Link to="/settings">
                    <Button variant="ghost">Settings</Button>
                  </Link>
                  <Link to="/editor">
                    <Button variant="default">Image Editor</Button>
                  </Link>
                </>
              ) : (
                <Link to="/auth">
                  <Button variant="default">Get Started</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <ImageIcon className="h-12 w-12 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AgriAI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional AI-powered image processing and editing platform designed for modern creators.
            Transform your visuals with cutting-edge technology and intuitive design.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
            <CardHeader>
              <Palette className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Advanced Editing</CardTitle>
              <CardDescription>
                Professional-grade image editing tools with AI-powered enhancements and filters.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Optimized performance with real-time processing and instant preview capabilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Share projects, collaborate with team members, and manage workflows seamlessly.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Built for Professionals</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AgriAI combines the power of artificial intelligence with professional image editing tools
              to create the ultimate creative platform. Whether you're a photographer, designer, or content creator,
              our platform provides everything you need to bring your vision to life.
            </p>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">AI-powered image enhancement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Real-time collaborative editing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Cloud-based project management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Professional-grade output quality</span>
              </div>
            </div>
          </div>

          <Card className="border-border bg-gradient-surface p-8">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription>
                Join thousands of creators using AgriAI to transform their workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {user ? (
                <div className="space-y-3">
                  <Link to="/editor" className="w-full">
                    <Button className="w-full" size="lg">
                      Open Image Editor
                    </Button>
                  </Link>
                  <Link to="/profile" className="w-full">
                    <Button variant="outline" className="w-full" size="lg">
                      View Profile
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/auth" className="w-full">
                  <Button className="w-full" size="lg">
                    Create Free Account
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">AgriAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AgriAI. Built with Lovable and Supabase.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;