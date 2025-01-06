'use client'

import { Book, Building2, FileText, GraduationCap, HeartPulse, LayoutDashboard, Library, Newspaper, PenTool, Presentation } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const useCases = [
  {
    title: 'Blog Posts & Articles',
    description: 'Help readers plan their reading time for blog posts, news articles, and long-form content. Increases engagement by setting clear expectations.',
    icon: PenTool,
    example: 'Tech blogs showing "5 min read" helps busy professionals plan their breaks.'
  },
  {
    title: 'Healthcare Documentation',
    description: 'Assist medical professionals in managing their time when reviewing patient documentation, medical research, or healthcare protocols.',
    icon: HeartPulse,
    example: 'Medical guidelines with "10 min read" helps doctors efficiently review protocols.'
  },
  {
    title: 'Educational Content',
    description: 'Enable students and educators to better plan study sessions and course material consumption with accurate reading time estimates.',
    icon: GraduationCap,
    example: 'Online course chapters showing "15 min read" helps students plan study sessions.'
  },
  {
    title: 'Technical Documentation',
    description: 'Provide developers and IT professionals with time estimates for reading documentation, guides, and technical specifications.',
    icon: FileText,
    example: 'API documentation with "2 min read" helps developers quickly find information.'
  },
  {
    title: 'Corporate Communications',
    description: 'Help employees manage their time when reading internal communications, policies, and company updates.',
    icon: Building2,
    example: 'Company memos with "3 min read" helps employees schedule their day.'
  },
  {
    title: 'News & Media',
    description: 'Allow readers to prioritize and plan their news consumption with accurate reading time estimates for articles.',
    icon: Newspaper,
    example: 'News articles showing "4 min read" helps readers choose what to read now vs. later.'
  },
  {
    title: 'E-Learning Platforms',
    description: 'Help learners manage their study time and track progress through course materials with reading time estimates.',
    icon: Library,
    example: 'Online lessons with "20 min read" helps students pace their learning.'
  },
  {
    title: 'Business Reports',
    description: 'Enable professionals to better manage their time when reviewing business reports, analytics, and market research.',
    icon: LayoutDashboard,
    example: 'Market reports with "8 min read" helps executives prepare for meetings.'
  },
  {
    title: 'Academic Research',
    description: 'Help researchers and students manage their literature review process with reading time estimates for papers.',
    icon: Book,
    example: 'Research papers showing "30 min read" helps scholars plan their review sessions.'
  },
  {
    title: 'Training Materials',
    description: 'Assist trainers and learners in planning and executing training sessions with accurate content consumption estimates.',
    icon: Presentation,
    example: 'Training modules with "12 min read" helps trainers plan workshop sessions.'
  },
]

export default function UseCases() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Reading Time Estimates Across Industries
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how reading time estimates can enhance user experience and improve content engagement across different sectors
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <useCase.icon className="w-6 h-6 text-primary" />
                  <CardTitle>{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-2">
                <CardDescription>{useCase.description}</CardDescription>
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-primary">Example: </span>
                    {useCase.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

