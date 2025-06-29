
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
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rodwanbaghdadi',
      href: 'https://www.linkedin.com/in/rodwanbaghdadi/',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Rodwanbagdadi',
      href: 'https://github.com/Rodwanbagdadi',
      color: 'text-slate-600 dark:text-slate-400'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-16 w-56 h-56 bg-gradient-to-br from-blue-400/6 to-indigo-400/10 rounded-full blur-3xl animate-float opacity-40"></div>
        <div className="absolute bottom-24 left-24 w-64 h-64 bg-gradient-to-br from-teal-400/8 to-cyan-400/12 rounded-full blur-3xl animate-slow-spin opacity-30"></div>
      </div>
      
      <div className="section-container relative z-10">
        <AnimatedCard>
          <div className="text-center mb-12">
            <h2 className="section-title text-slate-800 dark:text-slate-100">Contact</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto text-lg">
              Let's connect! Feel free to reach out through any of these channels.
            </p>
          </div>
        </AnimatedCard>
        
        <div className="max-w-2xl mx-auto">
          <AnimatedCard>
            <Card className="border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
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
                        className="group flex items-center gap-4 p-4 rounded-lg border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 interactive-scale"
                      >
                        <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-700 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-6 w-6 ${contact.color}`} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
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
