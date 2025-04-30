
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
