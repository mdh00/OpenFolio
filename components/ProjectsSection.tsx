import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/components/data";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/70">A showcase of my recent work and achievements</p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden border-2 hover:border-accent transition-colors duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardContent className="p-8 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl gradient-text">{projects[currentProject].title}</CardTitle>
                  <CardDescription className="text-base">{projects[currentProject].description}</CardDescription>
                </CardHeader>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="flex-1">
                      <a href={projects[currentProject].githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <a href={projects[currentProject].liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevProject}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextProject}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentProject ? "bg-accent" : "bg-muted"
                }`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
