import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import { user } from "@/components/data";

export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }
  return (
    <section id="home" className="min-h-lh flex items-center justify-center px-4 overflow-hidden -z-50">
      <section id="home" className=" min-h-lh flex items-center justify-center px-4 overflow-hidden pt-20">
        <div className="absolute inet-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-xl text-foreground/80 animate-fade-in">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold gradient-text animate-fade-in">{user.name}</h1>
                <h2 className="text-2xl lg:text-3xl text-accent font-semibold animate-fade-in">{user.role}</h2>
              </div>
              <p className="text-lg text-foreground/70 max-w-2xl animate-fade-in">
                {user.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button size="lg" className="animate-glow" onClick={() => scrollToSection("#contact")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("#projects")}>
                  <Github className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-background p-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold animate-bounce">
                  Available for hire!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
