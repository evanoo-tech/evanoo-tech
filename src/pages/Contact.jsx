import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
// import { useMeta } from "../hooks/useMeta";
import SEO from "@/components/SEO";

export default function Contact() {
  // useMeta({
  //   title: "Contact Us | Evanoo Technologies",
  //   description:
  //     "Get in touch with Evanoo for website development, mobile apps, cloud hosting, SaaS platforms, AI solutions and enterprise software.",
  // });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      e.target.reset();
      toast.success("Thanks! We'll get back to you within one business day.");
    }, 700);
  };

  return (
    <>
      <SEO
        title={"Contact Us | Evanoo Technologies"}
        description={
          "Get in touch with Evanoo for website development, mobile apps, cloud hosting, SaaS platforms, AI solutions and enterprise software."
        }
      />
      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Contact
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
          Let's Build Your Next
          <span className="gradient-text"> Digital Solution</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Whether you need a website, mobile application, cloud hosting, SaaS
          platform, AI solution, or custom software, our team is ready to help
          bring your ideas to life.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8 lg:col-span-3 shadow-elegant"
          >
            <h2 className="text-xl font-bold">Send us a message</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Project enquiry"
                className="mt-2"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project, goals, and timeline."
                className="mt-2"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-6 gradient-hero text-primary-foreground border-0 shadow-elegant hover:opacity-90"
            >
              {submitting ? (
                "Sending..."
              ) : (
                <>
                  Send message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Info */}
          {/* Contact Information */}
          <aside className="space-y-5 lg:col-span-2">
            {/* Email */}
            <a
              href="mailto:contact@evanoo.in"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  contact@evanoo.in
                </p>
                <p className="text-xs text-muted-foreground">
                  Response within one business day
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919382451949?text=Hi%20Evanoo,%20I%20want%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                {/* <p className="mt-1 text-sm text-muted-foreground">
        +91 93824 51949
      </p> */}
                <p className="text-xs text-muted-foreground">
                  Quick support & project discussion
                </p>
              </div>
            </a>

            {/* Office */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <MapPin className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kolkata, West Bengal, India
                </p>

                <p className="text-xs text-muted-foreground">
                  Serving clients across India & Worldwide
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">Business Hours</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Monday – Friday
                </p>

                <p className="text-sm text-muted-foreground">
                  10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Evanoo location"
            src="https://www.google.com/maps?q=Sector%20V,%20Kolkata,India&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918083506050?text=Hi%20Evanoo,%20I%20want%20to%20discuss%20my%20project."
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant animate-float hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
