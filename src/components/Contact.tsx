
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import { AnimatedCard } from './AnimatedCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Get in touch via email',
      action: 'Send Email',
      link: 'mailto:rodwan.bagdadi@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'Let\'s Connect',
      description: 'Connect on professional networks',
      action: 'View Profile',
      link: '#social'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedCard>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Start a Conversation</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card 
                      key={method.title}
                      className="group interactive-scale border-border hover:border-primary/50 bg-card hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-xl transition-all duration-300">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {method.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {method.description}
                            </p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            asChild
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          >
                            <a href={method.link}>
                              <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-foreground mb-4">Quick Contact</h4>
                <ContactInfo />
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Ready to Collaborate?
                    </h4>
                    <p className="text-muted-foreground">
                      I'm always open to discussing new opportunities, 
                      innovative projects, and ways we can work together.
                    </p>
                  </div>
                  
                  <SocialLinks />
                </CardContent>
              </Card>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
