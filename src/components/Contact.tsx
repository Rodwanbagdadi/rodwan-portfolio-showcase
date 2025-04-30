import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/utils/emailService';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at rodwanbagdadi@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-neutral-300 mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:rodwanbagdadi@gmail.com" className="text-neutral-400 hover:text-neutral-200">
                      rodwanbagdadi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-accent p-2 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-neutral-400">Heilbronn, Germany</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <p className="text-neutral-400 mb-4">
                Follow me on social media or check out my work on GitHub.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Rodwanbagdadi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-muted p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/rodwanbaghdadi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-muted p-3 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg shadow-sm border border-neutral-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required 
                    className="border-neutral-600 bg-accent text-foreground focus:border-neutral-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email" 
                    required 
                    className="border-neutral-600 bg-accent text-foreground focus:border-neutral-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  required 
                  className="border-neutral-600 bg-accent text-foreground focus:border-neutral-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message" 
                  className="min-h-[120px] border-neutral-600 bg-accent text-foreground focus:border-neutral-400"
                  required 
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600"
              >
                <Send size={16} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <p className="text-xs text-neutral-400 text-center mt-2">
                Emails are processed through EmailJS. Your information is used only to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
