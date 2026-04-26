
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { AnimatedCard } from './AnimatedCard';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rodwanbagdadi@gmail.com',
      href: 'mailto:rodwanbagdadi@gmail.com',
      color: 'text-black dark:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rodwanbaghdadi',
      href: 'https://www.linkedin.com/in/rodwanbaghdadi/',
      color: 'text-black dark:text-white'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Rodwanbagdadi',
      href: 'https://github.com/Rodwanbagdadi',
      color: 'text-black dark:text-white'
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-white via-white/20 to-white/30 dark:from-black dark:via-black dark:to-black/30">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-12">
            <h2 className="section-title text-black dark:text-white">Contact</h2>
            <p className="text-black dark:text-white mt-4 max-w-2xl mx-auto text-lg">
              Let's connect! Feel free to reach out through any of these channels.
            </p>
          </div>
        </AnimatedCard>
        
        <div className="max-w-2xl mx-auto">
          <AnimatedCard>
            <Card className="border-black/50 dark:border-white/50 bg-white/70 dark:bg-black/70 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Contact Links */}
                <div className="space-y-6">
                  {contactLinks.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-lg border border-black/50 dark:border-white/50 hover:border-black dark:hover:border-white hover:shadow-lg transition-all duration-300 interactive-scale"
                      >
                        <div className={`p-3 rounded-xl bg-white dark:bg-black group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-black dark:text-white text-sm">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
