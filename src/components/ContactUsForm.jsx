import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Loader2,
  User,
  MessageSquare,
} from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactUsForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState();

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
      phone: phone,
      subject: formData.get("subject")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
    };

    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Name is required";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    }

    // Mobile number validation
    if (!phone) {
      newErrors.phone = "Mobile number is required";
    } else {
      // Remove spaces, brackets, hyphens, etc.

      if (phone.trim()?.length !== 10) {
        newErrors.phone = "Please enter a valid mobile number";
      }
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
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative overflow-hidden rounded-lg border border-border bg-card/60 shadow backdrop-blur-xl py-8 sm:py-12 lg:col-span-3"
      >
        {/* Decorative gradient blur */}
        <div className="absolute -left-1/2 -top-1/2 -z-10 h-[200%] w-[200%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="mb-10 px-8 sm:px-12">
          <h2 className="inline-flex items-center gap-2 text-3xl font-bold tracking-tight">
            {/* <Sparkles className="h-6 w-6 text-primary" /> */}
            Send us a message
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </div>

        <div custom-attr="form-input" className="px-8 sm:px-12">
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

            <div
              className={`flex h-12 w-full rounded-md border bg-background/50 shadow-sm transition-all focus-within:bg-background focus-within:ring-1 ${
                errors.phone
                  ? "border-red-500 focus-within:ring-red-500"
                  : "border-input hover:border-primary/50 focus-within:border-ring focus-within:ring-ring"
              }`}
            >
              {/* Country Code Prefix */}
              <div className="flex items-center border-r border-border bg-muted/40 px-3 text-sm font-medium text-muted-foreground rounded-l-md select-none">
                <span>+91</span>
              </div>

              {/* Phone Input */}
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                inputMode="numeric"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(val);
                  clearError("phone");
                }}
                className="flex-1 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {errors.phone && (
              <p className="mt-1 text-xs font-medium text-red-500">
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
        </div>
        <div className="px-8 sm:px-12">
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
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
