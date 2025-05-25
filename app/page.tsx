"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 text-center">
        Real Estate Flyer Designs Available Now!
        <a
          href="#contact"
          className="ml-4 inline-block bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors duration-200"
        >
          Contact
        </a>
      </div>
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-10">
        <div className="relative max-w-6xl mx-auto px-6 py-4 flex justify-center">
          <Link
            href="/"
            className="absolute left-0 inline-flex items-center text-lg font-bold text-blue-600 hover:text-blue-800"
          >
            <Image
              src="/flyer.png"
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6 mr-2"
            />
            HallmarkOC
          </Link>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#it-consulting" className="hover:text-blue-600">IT Consulting</a>
            <a href="#marketing-seo" className="hover:text-blue-600">Marketing & SEO</a>
            <a href="#real-estate-flyers" className="hover:text-blue-600">Flyers</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
      {/* Hero / Home */}
      <section id="home" className="py-20 px-6 text-center bg-blue-50">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hallmark IT & Marketing Solutions
        </motion.h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-4">
          Since 2019, I&apos;ve delivered custom tech and marketing services for business professionals across Orange County.
        </p>
      
        <div className="mt-8 flex justify-center gap-4">
          <a href="#it-consulting"><Button>View Services</Button></a>
          <a href="#contact"><Button variant="outline">Contact</Button></a>
        </div>
      </section>
      {/* Section Separator */}
      <hr className="border-t border-gray-300 my-8" />

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md space-y-6 text-gray-700">
            <p>
              Since 2019, I have been offering specialized technology consulting and marketing solutions tailored to business professionals across Orange County. Whether you need expert advice on tech upgrades, strategic digital marketing, or focused IT support, I&apos;m here to assist.
            </p>
            <p>
              With a solid background in Technology Solutions & Business Optimization, I&apos;ve worked with real estate agents, finance professionals, and business owners to drive success. By implementing innovative technology and strategic marketing campaigns, I&apos;ve boosted sales, improved productivity, and enhanced online presence. My expertise spans advanced IT solutions, SEO strategies, and social media marketing and advertising.
            </p>
            <p>
              I&apos;m committed to delivering personalized, hands-on support throughout Orange County, ensuring your technology runs smoothly and your marketing strategies yield tangible results. In today’s competitive landscape, the right tech and marketing approach can make all the difference.
            </p>
            <p className="text-center font-semibold text-lg">
              Empowering Your Business with Technology + Strategy
            </p>
          </div>
        </div>
      </section>
      {/* Section Separator */}
      <hr className="border-t border-gray-300 my-8" />

      {/* IT Consulting Section */}
      <section id="it-consulting" className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          IT Consulting
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">IT Consulting</h3>
              <p className="text-muted-foreground text-sm mb-2">Custom IT Solutions tailored to meet your business needs — $45/hour</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>PC Data Backup Solution – routine backups to protect against data loss</li>
                <li>Device Cloud Data Storage (iCloud, OneDrive, Google Drive, etc.) setup & management</li>
                <li>Data Migration – seamless transfer between devices or storage systems</li>
                <li>PC Optimization & Tune Up – performance enhancements, cleanup, and startup tweaks</li>
                <li>CRM Setup & Support – configure & optimize CRM systems; CSV data import</li>
                <li>Email Repair/Configuration – setup & troubleshoot Gmail, Yahoo, Apple, Microsoft, Exchange</li>
                <li>Software Installation/Configuration – Adobe Cloud, Microsoft Office, Antivirus, etc.</li>
                <li>Router/Modem/Internet Configuration – professional setup for reliable connectivity</li>
                <li>Mobile Device Support – setup, troubleshooting, and sync for Apple & Android</li>
                <li>Printer Connectivity – wired & wireless printer setup on your network</li>
                <li>Other Technical Support & Troubleshooting – hardware, software, and network issue resolution</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Section Separator */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Marketing & SEO Section */}
      <section id="marketing-seo" className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Marketing & SEO
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Marketing & SEO</h3>
              <p className="text-muted-foreground text-sm mb-2">Strategic Marketing & Design Solutions</p>
                  <div>
                    <h4 className="font-semibold mb-1">Search Engine Optimization (SEO)</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>On-Page Optimization – Optimize meta tags, alt-text, headers, and content to improve website relevance</li>
                      <li>Keyword Research and Strategy – Identify TOP keywords to target and develop a way to incorporate into content</li>
                      <li>SEO Audit Report – Conduct a thorough audit of your website to identify areas of improvement and resolve issues affecting performance and search rankings</li>
                      <li>Local SEO – Enhance your online presence for local search results, optimize reviews and Google Business information</li>
                      <li>Technical SEO – Improve site speed, mobile compatibility, and fix crawl errors for better search performance</li>
                      <li>Content Optimization – Refine content to meet SEO best practices, enhancing quality, relevance, and engagement</li>
                      <li>Semrush audit reports for full in-depth website analysis</li>
                      <li>Cloudflare SSL encryption for security</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tailored Social Media Marketing Solutions</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Consulting & Strategy – Custom social media strategies aligned to your business goals</li>
                      <li>Social Media Audit – Analyze engagement and insights to build a strong online presence</li>
                      <li>Advertising Campaign – Manage Meta ads and paid social campaigns to drive targeted traffic</li>
                      <li>Analytics & Account Growth – Performance analysis with actionable recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email + SMS Digital Marketing</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Text Message Blast Service – Targeted SMS campaigns for immediate engagement</li>
                      <li>Email Blast Service – Comprehensive email marketing to generate leads and boost visibility</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Created Social Media Content</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Instagram/Facebook Post Templates – Visually appealing content for posts (Pricing: $35 per template)</li>
                      <li>Listing Posts – Highlight new properties and attract buyers</li>
                      <li>Open House Posts – Promote upcoming open houses</li>
                      <li>Prospecting Buyers – Engage potential buyers with targeted content</li>
                      <li>Self-Promotion – Showcase testimonials, achievements, and market expertise</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Social Media Story Templates</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Listing Stories – Feature new properties with engaging visuals (Pricing: $35 per template)</li>
                      <li>Open House Stories – Remind followers about open houses</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real Estate Flyers & Digital PDFs</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Open House Flyers – $35 Single-Sided / $45 Double-Sided</li>
                      <li>New Listing Flyers – $35 Single-Sided / $45 Double-Sided</li>
                      <li>Property Postcards (9&quot; x 6.5&quot;, 2-sided) – $35</li>
                      <li>Social Media Digital Flyers – $35</li>
                    </ul>
                  </div>
                  <div>
                    <a href="#real-estate-flyers" className="text-blue-500">Real Estate marketing →</a>
                  </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Section Separator */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Real Estate Flyers Section */}
      <section id="real-estate-flyers" className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real Estate Flyers
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Real Estate Flyers</h3>
              <p className="text-muted-foreground text-sm mb-2">Real Estate – Custom Created Flyer Design PDFs</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Open House Flyers – Bright high-quality designs for open houses – $35 Single‑Sided / $45 Double‑Sided</li>
                <li>New Listing Flyers – Attractive, high-impact design to showcase the property – $35 Single‑Sided / $45 Double‑Sided</li>
                <li>Property Postcards (9&quot; W x 6.5&quot; H, 2‑sided) – $35</li>
                <li>Social Media Digital Flyers – 1:1 ratio square images, perfect for social & digital marketing – $35</li>
                <li>Changes & Revisions to Proof – $10</li>
                <li className="italic">*Contact for printing options</li>
              </ul>
              <div className="mt-6 bg-white rounded p-4 shadow-inner">
                <div className="flex justify-center gap-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/FlyerFront.jpg"
                      alt="Example Flyer Front"
                      width={300}
                      height={400}
                      className="max-w-xs border rounded"
                    />
                    <span className="mt-2 text-sm font-medium">Front Side Example</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/FlyerBack.jpg"
                      alt="Example Flyer Back"
                      width={300}
                      height={400}
                      className="max-w-xs border rounded"
                    />
                    <span className="mt-2 text-sm font-medium">Back Side Example</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="w-full bg-gray-50 border-t border-gray-300 my-8"></div>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-center text-gray-600 mb-8">
          I&apos;d love to hear from you directly. Feel free to reach out via email or phone.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/computer.jpg"
              alt="Work setup"
              width={400}
              height={300}
              className="rounded shadow w-full max-w-md h-auto object-cover"
            />
          </div>
          {/* Right: Contact Cards */}
          <div className="flex flex-col justify-center space-y-4">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Mail className="text-blue-500" />
                <a
                  href="mailto:ashworthandre@gmail.com"
                  className="text-gray-700 hover:text-blue-600"
                >
                  ashworthandre@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Phone className="text-blue-500" />
                <a
                  href="tel:+19493425456"
                  className="text-gray-700 hover:text-blue-600"
                >
                  (949) 342-5456
                </a>
              </CardContent>
            </Card>
          </div>
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
              className="transform hover:scale-110 transition-transform duration-200"
            />
          </a>
          <span className="text-gray-400">|</span>
          <span>© 2025 HallmarkOC</span>
        </div>
      </footer>
    </main>
  );
}