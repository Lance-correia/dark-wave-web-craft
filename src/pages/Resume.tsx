
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { education, experience, skills } from "@/data/resume"

export default function Resume() {
  return (
    <div className="container py-16 mt-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-lg text-muted-foreground">Frontend Developer</p>
          </div>
          <Button asChild variant="outline">
            <a href="#" download className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="mb-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-6 space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <div>
                      <CardTitle>{job.position}</CardTitle>
                      <p className="text-lg text-primary">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  
                  <h4 className="font-medium text-lg mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="mt-6 space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <div>
                      <CardTitle>{edu.degree} in {edu.field}</CardTitle>
                      <p className="text-lg text-primary">{edu.school}</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="skills" className="mt-6">
            <Card className="glass-card">
              <CardContent className="pt-6">
                <Accordion type="multiple">
                  {skills.map((skillGroup, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{skillGroup.category}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-wrap gap-2 py-2">
                          {skillGroup.items.map((skill, i) => (
                            <span 
                              key={i} 
                              className="bg-secondary px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Additional Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>English</span>
                    <span className="text-primary">Native</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Spanish</span>
                    <span className="text-primary">Professional</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>French</span>
                    <span className="text-primary">Basic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>AWS Certified Developer</span>
                    <span className="text-primary">2023</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Google UX Design Professional</span>
                    <span className="text-primary">2022</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>MongoDB Certified Developer</span>
                    <span className="text-primary">2021</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
