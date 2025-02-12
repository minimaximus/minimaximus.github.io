import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Shield, Rocket, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/384d773d-44f7-4496-9e60-77b7a381c13c.png" 
              alt="Oprio Logo" 
              className="h-24 md:h-32" // Doubled height: 96px mobile, 128px desktop
            />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 transition-colors">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <div className="relative">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2MmgzMnYtMnptMCAydjI4aDJ2LTI4aC0yem0yLTJ2LTNoLTJ2M2gyem0tMiAySDJ2MmgzMHYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>

        {/* Hero Content */}
        <section className="relative pt-48 pb-24 px-4">
          <div className="container mx-auto text-center text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 animated-element">
              Launching Soon
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight animated-element" data-delay="1">
              Prioritize What Matters Most for Your Business
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animated-element" data-delay="2">
              Transform your workflow with intelligent prioritization and seamless team collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animated-element" data-delay="3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-colors">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Oprio?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Global Access",
                description: "Access your priorities from anywhere in the world"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Enterprise Security",
                description: "Bank-grade encryption for your sensitive data"
              },
              {
                icon: <Rocket className="w-8 h-8 text-primary" />,
                title: "Fast Implementation",
                description: "Get started in minutes, not months"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Team Collaboration",
                description: "Work together seamlessly with your team"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 glass hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Loved by Teams Worldwide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Oprio has transformed how we manage our projects. The priority system is intuitive and effective.",
                author: "Sarah Johnson",
                role: "Product Manager, TechCorp"
              },
              {
                quote: "The best prioritization tool we've used. It's simple yet powerful, perfect for our team's needs.",
                author: "Michael Chen",
                role: "CEO, StartupX"
              },
              {
                quote: "Finally, a tool that helps us focus on what truly matters. Our productivity has increased significantly.",
                author: "Emily Roberts",
                role: "Operations Director, ScaleUp"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 glass">
                <p className="mb-4 text-lg">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of teams already using Oprio to prioritize better and achieve more
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">oprio</h3>
              <p className="text-sm text-muted-foreground">
                Prioritize what matters most for your business success
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oprio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
