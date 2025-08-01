
import emailjs from '@emailjs/browser';

/**
 * Email Service Utility
 * 
 * This utility provides functionality to send emails from the contact form.
 * It's integrated with EmailJS (https://www.emailjs.com/)
 * 
 * Configuration requires:
 * Setting environment variables in your deployment platform as:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_USER_ID
 */

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Send contact form email using EmailJS
 * 
 * @param params The email parameters from the contact form
 * @returns Promise that resolves when email is sent
 */
export const sendContactEmail = async (params: EmailParams): Promise<void> => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fjah6sr';
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_g8ieeaf';
  const userID = import.meta.env.VITE_EMAILJS_USER_ID || 'Mytn6kd6ouqaGim-A';
  
  const templateParams = {
    from_name: params.name,
    from_email: params.email,
    subject: params.subject,
    message: params.message,
    to_name: 'Rodwan',
    reply_to: params.email
  };
  
  console.log('Sending email with params:', templateParams);
  
  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, userID);
    console.log('Email sent successfully:', result.text);
    return Promise.resolve();
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};
