
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 w-full max-w-md mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-70"></div>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-light-secondary mb-1 text-sm font-jetbrains">
            <span className="text-neon-blue">&gt;</span> NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-dark-tertiary text-light border border-dark-tertiary focus:border-neon-blue rounded p-2 focus:outline-none focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-light-secondary mb-1 text-sm font-jetbrains">
            <span className="text-neon-blue">&gt;</span> EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-dark-tertiary text-light border border-dark-tertiary focus:border-neon-blue rounded p-2 focus:outline-none focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-light-secondary mb-1 text-sm font-jetbrains">
            <span className="text-neon-blue">&gt;</span> MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-dark-tertiary text-light border border-dark-tertiary focus:border-neon-blue rounded p-2 focus:outline-none focus:ring-1 focus:ring-neon-blue transition-colors duration-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="neon-button w-full flex items-center justify-center gap-2 py-3 relative overflow-hidden group"
        >
          {isSubmitting ? (
            <>
              <span className="text-neon-purple animate-pulse">PROCESSING...</span>
            </>
          ) : (
            <>
              <span className="group-hover:text-neon-blue transition-colors duration-300">SEND MESSAGE</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
