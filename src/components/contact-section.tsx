import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));

    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email",
      value: "tanishkaur03@gmail.com",
      link: "mailto:tanishkaur03@gmail.com"
    },
    {
      icon: "lucide:phone",
      title: "Phone",
      value: "+917494896065",
      link: "tel:+917494896065"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center gap-3"
                  >
                    <Icon icon="lucide:check-circle" width={24} />
                    <p>Thank you for your message! I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className={errors.name ? "border-red-500" : ""}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          placeholder="Your email"
                          type="email"
                          value={formState.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className={errors.email ? "border-red-500" : ""}
                          required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input
                        placeholder="Message subject"
                        value={formState.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className={errors.subject ? "border-red-500" : ""}
                        required
                      />
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        placeholder="Your message"
                        value={formState.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={errors.message ? "border-red-500" : ""}
                        rows={5}
                        required
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="font-medium w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Icon icon="lucide:send" width={18} className="ml-2" />}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-lg h-full border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={info.title === "Location" ? "_blank" : undefined}
                      rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <Icon icon={info.icon} width={24} />
                      </div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                      <Icon icon="logos:github-icon" width={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/tanish-b0363621b/" target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                      <Icon icon="logos:linkedin-icon" width={20} />
                    </a>
                    <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-muted/80 transition-colors">
                      <Icon icon="logos:google-scholar" width={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};