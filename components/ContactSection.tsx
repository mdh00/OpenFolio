'use client'
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send } from "lucide-react";
import { user } from "@/components/data";

interface ContactSectionProps {
  contactForm: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  handleContactSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactSection({
  contactForm,
  isSubmitting,
  submitStatus,
  handleContactSubmit,
  handleInputChange,
}: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <p className="text-lg text-foreground/70">
            Ready to bring your next project to life? Send me a message and let's discuss how we can create something
            amazing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardHeader>
              <CardTitle className="gradient-text">Send Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-2 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full animate-glow" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-600 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-600 font-medium">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-2 hover:border-accent transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold gradient-text mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span className="text-foreground">{user?.email || "your.email@example.com"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-accent" />
                    <a href={user.linkedinUrl} className="text-foreground hover:text-accent transition-colors">
                      {user.linkedinUsername}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold gradient-text mb-4">Let's Collaborate</h3>
                <p className="text-foreground/70 mb-4">
                  I'm always interested in new opportunities and exciting projects. Whether you need:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Full-stack web development</li>
                  <li>• Mobile app development</li>
                  <li>• Technical consulting</li>
                  <li>• Code review and optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
