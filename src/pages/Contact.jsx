import {
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Send,
  Loader2,
  User,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState({
    country: {},
    inputValue: "",
  });

  const formSectionRef = useRef(null);

  const [searchParams] = useSearchParams();
  const scroll = searchParams.get("scroll");

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const getMaxNationalDigits = (format) => {
    if (!format) return undefined;

    return (format.match(/\./g) || []).length;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: {},
      subject: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    const maxLen = getMaxNationalDigits(phone.country?.format);
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    }

    // Mobile number validation
    if (!phone.inputValue) {
      newErrors.phone = "Mobile number is required";
    } else {
      // Remove spaces, brackets, hyphens, etc.
      const digitsOnly = phone.inputValue.replace(/\D/g, "");
      const countryCodeLength = phone?.country?.dialCode?.length ?? 0;
      const withoutCountryCode = digitsOnly.slice(countryCodeLength);

      if (withoutCountryCode?.length !== maxLen) {
        newErrors.phone = "Please enter a valid mobile number";
      }

      values.phone = {
        country: phone.country,
        inputValue: withoutCountryCode,
      };
    }

    if (!values.message) {
      newErrors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    try {
      const url = "https://evanoo-contact-db.onrender.com/api/contact";
      // const url = "http://localhost:5000/api/contact";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.name,
          email: values.email,
          pohone: values.phone,
          subject: values.subject,
          message: values.message,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw data;
      }

      toast.success("Thanks! We'll get back to you within one business day.");
      form.reset();
      setErrors({});
    } catch (error) {
      console.error("Enquiry submission failed:", error);
      let errorMessage = "";
      if (error?.errors && Array.isArray(error?.errors)) {
        errorMessage = error?.errors?.map((e) => e.message).join(", ");
      } else {
        errorMessage = error.message || "Failed to submit the enquiry.";
      }
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }

    // setTimeout(() => {
    //   setSubmitting(false);
    //   form.reset();
    //   setErrors({});
    //   // toast.success("Thanks! We'll get back to you within one business day.");
    //   toast.success("Thanks! We'll get back to you within one business day.");
    // }, 700);
  };

  useEffect(() => {
    let timer;
    if (scroll === "form") {
      timer = setTimeout(() => {
        formSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title={"Contact Us | Evanoo Private Limited"}
        description={
          "Get in touch with Evanoo for website development, mobile apps, cloud hosting, SaaS platforms, AI solutions and enterprise software."
        }
      />
      {/* ---------- HERO : theme-adaptive contact section ---------- */}
      <section
        className="relative overflow-hidden border-y border-border/50 bg-background text-foreground"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklch, var(--foreground) 9%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--ink-foreground)_20%,transparent)] to-transparent" />

        <div className="relative container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-xs tracking-tight text-primary"
            data-aos="fade-down"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            $ evanoo --contact
          </div>

          <h1
            className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk,sans-serif] text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            Let's Build Your Next
            <span className="block gradient-text!">Digital Solution</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-md text-muted-foreground"
            data-aos="fade-up"
          >
            Whether you need a website, mobile application, cloud hosting, SaaS
            platform, AI solution, or custom software, our team is ready to help
            bring your ideas to life.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      <section
        ref={formSectionRef}
        className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8 max-lg:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-stretch">
            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-lg border border-border bg-card/60 p-8 shadow backdrop-blur-xl sm:p-12 lg:col-span-3"
            >
              {/* Decorative gradient blur */}
              <div className="absolute -left-1/2 -top-1/2 -z-10 h-[200%] w-[200%] rounded-full bg-primary/5 blur-[120px]" />

              <div className="mb-10">
                <h2 className="inline-flex items-center gap-2 text-3xl font-bold tracking-tight">
                  {/* <Sparkles className="h-6 w-6 text-primary" /> */}
                  Send us a message
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                  >
                    <User className="h-4 w-4 text-muted-foreground" />
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    onChange={() => clearError("name")}
                    className={`h-12 bg-background/50 transition-all focus:bg-background shadow-sm ${errors.name ? "border-red-500 focus-visible:ring-red-500" : "hover:border-primary/50"}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    onInput={() => clearError("email")}
                    className={`h-12 bg-background/50 transition-all focus:bg-background shadow-sm ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "hover:border-primary/50"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="mobileNumber"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                >
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  Mobile Number
                </label>

                <PhoneInput
                  defaultCountry="in"
                  value={phone?.inputValue}
                  onChange={(_, contryCode) => {
                    setPhone(contryCode);
                    clearError("phone");
                  }}
                  inputProps={{
                    id: "mobileNumber",
                    name: "mobileNumber",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "9876543210",
                    "aria-label": "Mobile number",
                  }}
                  className="w-full"
                  inputClassName={`!h-12 !w-full !rounded-md !border !bg-background/50 !text-sm !text-foreground !shadow-sm !outline-none !transition-all !rounded-tl-none !rounded-bl-none focus:!border-l-0 ${
                    errors.mobileNumber
                      ? "!border-red-500 !ring-1 !ring-red-500/20"
                      : "!border-input hover:!border-primary/50 focus:!border-primary focus:!ring-2 focus:!ring-primary/20"
                  }`}
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-12 !rounded-l-md !rounded-r-none !border !border-input !border-r-0 !bg-background/50 !px-3 hover:!bg-muted/50",
                    dropdownStyleProps: {
                      className:
                        "!z-50 !mt-1 !rounded-md !border !border-border !bg-popover !text-popover-foreground !shadow-lg",
                    },
                  }}
                />

                {errors.phone && (
                  <p className="text-xs font-medium text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="subject"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="h-12 bg-background/50 transition-all focus:bg-background shadow-sm hover:border-primary/50"
                />
              </div>

              <div className="mt-6 space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                >
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project, goals, and timeline..."
                  onChange={() => clearError("message")}
                  className={`resize-none bg-background/50 p-4 transition-all focus:bg-background shadow-sm ${errors.message ? "border-red-500 focus-visible:ring-red-500" : "hover:border-primary/50"}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-medium text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="group mt-8 w-full rounded-xl gradient-hero text-primary-foreground border-0 shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 sm:w-auto sm:px-8 h-12"
              >
                {!submitting ? (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  </>
                )}
              </Button>
            </form>

            {/* Contact Information */}
            <aside className="flex flex-col gap-6 lg:col-span-2">
              <div className="rounded-lg border border-border bg-card/60 p-8 shadow backdrop-blur-xl h-full flex flex-col justify-center sm:p-10 relative overflow-hidden">
                <div className="absolute right-0 top-0 -z-10 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[80px]" />

                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  Get in Touch
                </h3>
                <div className="mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-orange-400 mb-8" />

                <div className="space-y-8">
                  {/* Email */}
                  <a
                    href="mailto:contact@evanoo.in"
                    className="group flex items-start gap-5 transition-colors"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <h4 className="mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary break-all">
                        contact@evanoo.in
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Response within 24 hours
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8083506050?text=Hi%20Evanoo,%20I%20want%20to%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 transition-colors"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-md">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <h4 className="mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-[#25D366]">
                        Quick Support
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Project discussion & support
                      </p>
                    </div>
                  </a>

                  {/* Office */}
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Our Office
                      </p>
                      <h4 className="mt-1 text-lg font-semibold text-foreground">
                        Kolkata, India
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-5 group">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Business Hours
                      </p>
                      <h4 className="mt-1 text-lg font-semibold text-foreground">
                        Mon - Fri, 10am - 7pm IST
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Weekend support for emergencies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Map */}
          <div className="mt-12 overflow-hidden rounded-lg border border-border shadow">
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
        </div>
      </section>
    </>
  );
}
