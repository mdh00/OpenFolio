"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { skills, projects, user } from "@/components/data"

import HeaderNav from "@/components/HeaderNav"
import HeroSection from "@/components/HeroSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]


  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(nextProject, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setContactForm({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
     <HeaderNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Carousel */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection
        contactForm={contactForm}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        handleContactSubmit={handleContactSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  )
}
