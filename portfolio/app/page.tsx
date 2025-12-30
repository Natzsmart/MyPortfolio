"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Shield,
  Zap,
  Globe,
  Terminal,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Code className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white">Iniobong Effiong</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-white/80 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-white/80 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="grid gap-12 lg:grid-cols-2 items-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
                <Zap className="mr-2 h-4 w-4" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm Iniobong Effiong
              </h1>
              <p className="text-2xl text-purple-200 font-medium">Backend Developer & Smart Contracts Engineer</p>
              <p className="max-w-[600px] text-white/70 text-lg leading-relaxed">
                I architect scalable backend systems and engineer secure smart contracts for DeFi protocols. Passionate
                about blockchain innovation, system optimization, and building the future of finance.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
                asChild
              >
                <Link href="#contact">Let's Build Together</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10" asChild>
                <Link href="https://github.com" target="https://github.com/Natzsmart">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10" asChild>
                <Link href="https://linkedin.com" target="https://linkedin.com/in/iniobong-effiong">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10" asChild>
                <Link href="mailto:Iniobongeffiong40@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover object-top
    border-4 border-white/20 backdrop-blur-sm
    w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-4 z-20">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-4 z-20">
                <Database className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-white/70 max-w-[600px] mx-auto text-lg">
              Cutting-edge technologies I use to build the future
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                    <Terminal className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Backend</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                    C
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                    Nodejs
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                    <Globe className="h-5 w-5 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Blockchain</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                    Solidity
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                    Web3.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                    Ethers.js
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                    Hardhat
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                    <Database className="h-5 w-5 text-green-400" />
                  </div>
                  <CardTitle className="text-lg text-white">Database & Cloud</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
                    PostgreSQL
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
                    Redis
                  </Badge>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 backdrop-blur-sm hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/20 group-hover:bg-orange-500/30 transition-colors">
                    <Shield className="h-5 w-5 text-orange-400" />
                  </div>
                  <CardTitle className="text-lg text-white">DevOps & Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-200 border-orange-500/30">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-200 border-orange-500/30">
                    GitHub Actions
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-500/20 text-orange-200 border-orange-500/30">
                    Foundry
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-white/70 max-w-[600px] mx-auto text-lg">
              Innovative solutions that push the boundaries of what's possible
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="DeFi Lending Protocol"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-green-200 border border-green-500/30">
                  Live
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-purple-200 transition-colors">
                  DeFi Lending Protocol
                </CardTitle>
                <CardDescription className="text-white/70">
                  A decentralized platform that allows organizations to create vesting schedules for ERC20 tokens, enabling controlled token distribution over time. The platform will lock tokens and release them linearly over a 2-week period, providing transparency and automated distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-purple-500/30 text-purple-200">
                    Solidity
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-200">
                    Hardhat
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-200">
                    OpenZeppelin
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    asChild
                  >
                    <Link href="https://etherscan.io" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Contract
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-500/20 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="NFT Marketplace"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-blue-200 border border-blue-500/30">
                  NFT
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-blue-200 transition-colors">
                  NFT Marketplace
                </CardTitle>
                <CardDescription className="text-white/70">
                  High-performance REST API for NFT trading with real-time price feeds and analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-blue-500/30 text-blue-200">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-200">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-200">
                    Redis
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com/Natzsmart/JulyMint" target="https://github.com/Natzsmart/JulyMint">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    asChild
                  >
                    <Link href="https://api.example.com" target="https://julymint-frontend.vercel.app/">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Docs
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cross-Chain Bridge"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-green-200 border border-green-500/30">
                  Bridge
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-green-200 transition-colors">
                  Cross-Chain Bridge
                </CardTitle>
                <CardDescription className="text-white/70">
                  Secure asset bridge between Ethereum and Polygon with automated relayers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-green-500/30 text-green-200">
                    Solidity
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-200">
                    Go
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 text-green-200">
                    Chainlink
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    asChild
                  >
                    <Link href="https://bridge.example.com" target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Bridge
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <p className="text-white/70 max-w-[600px] mx-auto text-lg">
              Building the future, one line of code at a time
            </p>
          </div>
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-xl">Senior Smart Contracts Engineer</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-purple-200">
                      <MapPin className="h-4 w-4" />
                      DeFi Protocol • Remote
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70 bg-white/10 rounded-full px-3 py-1">
                    <Calendar className="h-4 w-4" />
                    2022 - Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>
                    Architected and deployed smart contracts managing{" "}
                    <span className="text-green-400 font-semibold">$50M+ in TVL</span>
                  </li>
                  <li>
                    Implemented automated testing suites achieving{" "}
                    <span className="text-blue-400 font-semibold">100% code coverage</span>
                  </li>
                  <li>
                    Led security audits and gas optimization initiatives reducing costs by{" "}
                    <span className="text-purple-400 font-semibold">30%</span>
                  </li>
                  <li>Built cross-chain infrastructure supporting multiple EVM networks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-white text-xl">Backend Engineer</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-blue-200">
                      <MapPin className="h-4 w-4" />
                      Blockchain Startup • San Francisco, CA
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70 bg-white/10 rounded-full px-3 py-1">
                    <Calendar className="h-4 w-4" />
                    2020 - 2022
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  <li>
                    Developed high-throughput APIs handling{" "}
                    <span className="text-green-400 font-semibold">10k+ requests per second</span>
                  </li>
                  <li>Built real-time data indexing systems for blockchain events</li>
                  <li>Implemented microservices architecture with Docker and Kubernetes</li>
                  <li>Designed database schemas optimized for crypto trading data</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-white/70 max-w-[600px] mx-auto text-lg">
              Ready to bring your next big idea to life? Let's connect and make it happen.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
                <CardDescription className="text-white/70">I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black/20 backdrop-blur-sm">
        <div className="container text-center text-white/70">
          <p>&copy; 2024 Iniobong Effiong. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
