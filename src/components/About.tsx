
import React from 'react';
import { FileText, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-700">
              I am a passionate Software Engineer and AI Specialist with expertise in building intelligent systems
              and developing innovative software solutions. With a strong background in machine learning, 
              artificial intelligence, and software development, I strive to create impactful technologies
              that solve real-world problems.
            </p>
            
            <p className="text-gray-700">
              My journey in technology began with a fascination for how computers can learn and adapt.
              This led me to pursue studies in AI and machine learning, which I've applied in various roles
              at companies like Outlier AI and Bosch Engineering GmbH.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-navy mb-3">Languages</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className="font-medium">Arabic</span>
                  <span className="text-sm text-gray-500">(Native)</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className="font-medium">English</span>
                  <span className="text-sm text-gray-500">(Fluent)</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <span className="font-medium">German</span>
                  <span className="text-sm text-gray-500">(Intermediate)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button asChild variant="outline" className="flex items-center gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Master's in Computer Science</p>
                    <p className="text-sm text-gray-500">University of Technology, 2018-2020</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor's in Mechatronics</p>
                    <p className="text-sm text-gray-500">Engineering Institute, 2014-2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Deep Learning Specialization</p>
                    <p className="text-sm text-gray-500">Coursera, 2021</p>
                  </div>
                  <div>
                    <p className="font-medium">TensorFlow Developer</p>
                    <p className="text-sm text-gray-500">Google, 2020</p>
                  </div>
                  <div>
                    <p className="font-medium">Machine Learning Engineer</p>
                    <p className="text-sm text-gray-500">DataCamp, 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
