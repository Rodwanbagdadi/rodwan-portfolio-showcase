
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/utils/emailService';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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
    </form>
  );
};

export default ContactForm;
