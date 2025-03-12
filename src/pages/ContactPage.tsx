import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

// Define colors directly (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Contact info item component - Simplified with icon above and no title
const ContactInfoItem = ({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center">
    <div
      className="p-4 rounded-full mb-5 inline-flex items-center justify-center"
      style={{ backgroundColor: colors.lapis + "20" }} // Light version of lapis color
    >
      <Icon className="h-7 w-7" style={{ color: colors.lapis }} />
    </div>
    <div className="text-gray-600">{children}</div>
  </div>
);

export default function ContactPage() {
  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);

    // Show success toast with Sonner
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. We'll get back to you soon.",
      duration: 5000,
    });

    form.reset();
  }

  // Set page title and scroll to top on mount
  useEffect(() => {
    document.title = "Contact Us | Flying Lemur Agency";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Contact Form and Image */}
        <section
          className="py-20 lg:p-24 w-full"
          aria-labelledby="contact-title"
        >
          <div className="container mx-auto px-4">
            <h1
              id="contact-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
              style={{ color: colors.dark }}
            >
              Get in <span style={{ color: colors.lapis }}>Touch</span>
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
              {/* Contact Form - 60% width on desktop */}
              <div className="w-full lg:w-[60%] bg-white rounded-lg shadow-lg p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to work together? Fill out the form
                  below and we'll get back to you as soon as possible.
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject of your message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 text-white text-lg"
                        style={{ backgroundColor: colors.lapis }}
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              {/* Image - 40% width on desktop */}
              <div className="w-full lg:w-[40%] relative">
                <div className="h-full rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Comfortable workspace with mobile phone"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full -z-10"
                  style={{ backgroundColor: colors.gren }}
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute -bottom-3 left-1/4 w-32 h-3 rounded-full -z-10"
                  style={{ backgroundColor: colors.yelo }}
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section - Simplified with icons above and no titles */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="contact-info-title"
        >
          <div className="container mx-auto px-4">
            <h2
              id="contact-info-title"
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
              style={{ color: colors.dark }}
            >
              Our Contact Information
            </h2>

            {/* Grid layout with icons above and no titles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <ContactInfoItem icon={Phone}>
                    <p className="text-lg">Main: (555) 123-4567</p>
                    <p className="mt-2 text-lg">Support: (555) 987-6543</p>
                  </ContactInfoItem>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <ContactInfoItem icon={Mail}>
                    <p className="text-lg">info@flyinglemur.com</p>
                    <p className="mt-2 text-lg">support@flyinglemur.com</p>
                  </ContactInfoItem>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <ContactInfoItem icon={MapPin}>
                    <p className="text-lg">123 Creative Avenue</p>
                    <p className="mt-2 text-lg">San Francisco, CA 94103</p>
                  </ContactInfoItem>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8">
                  <ContactInfoItem icon={Clock}>
                    <p className="text-lg">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-2 text-lg">Weekends: Closed</p>
                  </ContactInfoItem>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
