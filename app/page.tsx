"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Hero / Home */}
      <section id="home" className="py-20 px-6 text-center bg-orange-50">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hallmark IT Consulting & Marketing
        </motion.h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-4">
          Since 2019, I’ve delivered custom tech and marketing services for business professionals across Orange County.
        </p>
        <p className="max-w-2xl mx-auto text-gray-700">
          With a strong background in technology solutions, real estate support, and digital strategy, I help clients upgrade their systems, improve their visibility, and save time with personalized 1:1 service.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#services"><Button>View Services</Button></a>
          <a href="#contact"><Button variant="outline">Contact</Button></a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
              <p className="text-muted-foreground text-sm">
                System setup, OS installs, email repair, data backups, and day-to-day tech solutions tailored for professionals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Marketing & SEO</h3>
              <p className="text-muted-foreground text-sm">
                Full-service digital strategy including Meta ads, social media management, SEO audits, and website optimization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Real Estate Flyers</h3>
              <p className="text-muted-foreground text-sm">
                Professional one-page or two-page real estate flyers with quick turnaround — clean, modern, and effective.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Contact</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Card>
            <CardContent className="p-4 flex items-center gap-3 justify-center">
            <Mail />
            <a
              href="mailto:ashworthandre@gmail.com"
              className="text-blue-400 hover:text-blue-600 transition:ease-in-out duration-150"
            >
              ashworthandre@gmail.com
            </a>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3 justify-center">
            <Phone />
            <a
              href="tel:+19493425456"
              className="text-blue-400 hover:text-blue-600 transition:ease-in-out duration-150"
            >
              (949) 342-5456
              </a>  
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-white border-t text-muted-foreground">
        <div className="flex justify-center items-center gap-3">
          <a
            href="https://linkedin.com/in/andre-ashworth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>

          <span className="text-gray-400">|</span>

          <span>© 2025 HallmarkOC</span>
        </div>
      </footer>
    </main>
  );
}