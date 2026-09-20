import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Loader2,
  User,
  MessageSquare,
  Building,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactUsForm = ({ popup = false, setContactModal }) => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [phone, setPhone] = useState();

  const clearError = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      company: formData.get("company")?.toString().trim() || "",
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

    // if (!values.company) {
    //   newErrors.company = "Company/Organization is required";
    // }

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
          company: values.company,
          phone: values.phone,
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
      setPhone("");
      popup && setContactModal(false);
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
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative overflow-hidden rounded-lg border border-border bg-card/60 shadow backdrop-blur-xl py-8 sm:py-12 lg:col-span-3"
      >
        {/* Decorative gradient blur */}
        <div className="absolute -left-1/2 -top-1/2 -z-10 h-[200%] w-[200%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="mb-7 px-8 sm:px-12">
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
          <div className="grid gap-4 sm:grid-cols-2 mt-2">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder=" "
                  onChange={() => clearError("name")}
                  className={`peer h-12 bg-background/50 px-4 pt-2 transition-all focus:bg-background shadow-sm ${
                    errors.name
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "hover:border-primary/50"
                  }`}
                />

                <label
                  htmlFor="name"
                  className={`pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 bg-transparent px-1 text-sm font-medium text-muted-foreground transition-all duration-200
        peer-focus:top-0
        peer-focus:-translate-y-1/2
        peer-focus:backdrop-blur-xl
        peer-focus:rounded-md
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:bg-background/80
        peer-focus:font-semibold
        peer-focus:text-xs
        peer-focus:text-primary
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm
        ${errors.name ? "peer-focus:text-red-500" : ""}`}
                >
                  <User className="h-4 w-4" />
                  Full Name
                </label>
              </div>

              {errors.name && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  onInput={() => clearError("email")}
                  className={`peer h-12 bg-background/50 px-4 pt-2 transition-all focus:bg-background shadow-sm ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "hover:border-primary/50"
                  }`}
                />

                <label
                  htmlFor="email"
                  className={`pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 bg-transparent px-1 text-sm font-medium text-muted-foreground transition-all duration-200
        peer-focus:top-0
        peer-focus:-translate-y-1/2
        peer-focus:backdrop-blur-xl
        peer-focus:rounded-md
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:bg-background/80
        peer-focus:font-semibold
        peer-focus:text-xs
        peer-focus:text-primary
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm
        ${errors.email ? "peer-focus:text-red-500" : ""}`}
                >
                  <Mail className="h-4 w-4" />
                  Email Address
                </label>
              </div>

              {errors.email && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="relative">
              <Input
                id="company"
                name="company"
                placeholder=" "
                onChange={() => clearError("company")}
                className={`peer h-12 bg-background/50 px-4 pt-2 transition-all focus:bg-background shadow-sm ${
                  errors.company
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "hover:border-primary/50"
                }`}
              />

              <label
                htmlFor="company"
                className={`pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 bg-transparent px-1 text-sm font-medium text-muted-foreground transition-all duration-200
        peer-focus:top-0
        peer-focus:-translate-y-1/2
        peer-focus:backdrop-blur-xl
        peer-focus:rounded-md
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:bg-background/80
        peer-focus:font-semibold
        peer-focus:text-xs
        peer-focus:text-primary
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm
        ${errors.company ? "peer-focus:text-red-500" : ""}`}
              >
                <Building className="h-4 w-4" />
                Company/Organization
              </label>
            </div>

            {errors.company && (
              <p className="mt-1 text-xs font-medium text-red-500">
                {errors.company}
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2 relative">
            <div
              className={`relative flex h-12 w-full rounded-md border bg-background/50 shadow-sm transition-all focus-within:bg-background focus-within:ring-1 ${
                errors.phone
                  ? "border-red-500 focus-within:ring-red-500"
                  : "border-input hover:border-primary/50 focus-within:border-ring focus-within:ring-ring"
              }`}
            >
              {/* Country Code Prefix */}
              <div className="flex items-center border-r border-border bg-muted/40 px-3 text-sm font-medium text-muted-foreground rounded-l-md select-none">
                +91
              </div>

              {/* Input must come BEFORE label for peer-* */}
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                inputMode="numeric"
                placeholder=" "
                value={phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(val);
                  clearError("phone");
                }}
                className="peer flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />

              {/* Floating Label */}
              <label
                htmlFor="mobileNumber"
                className={`
        pointer-events-none absolute left-16 top-1/2
        -translate-y-1/2
        bg-transparent px-1
        text-sm font-medium text-muted-foreground
        transition-all duration-200
        peer-focus:-top-2.5
        peer-focus:left-4
        peer-focus:translate-y-0
        peer-focus:rounded-md
        peer-focus:bg-background
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:text-xs
        peer-focus:font-semibold
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm
        ${errors.phone ? "peer-focus:text-red-500" : "peer-focus:text-primary"}
      `}
              >
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Mobile Number
                </span>
              </label>
            </div>

            {errors.phone && (
              <p className="mt-1 text-xs font-medium text-red-500">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <div className="relative">
              <Input
                id="subject"
                name="subject"
                placeholder=" "
                className="peer h-12 bg-background/50 px-4 pt-2 transition-all focus:bg-background shadow-sm hover:border-primary/50"
              />

              <label
                htmlFor="subject"
                className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 bg-transparent px-1 text-sm font-medium text-muted-foreground transition-all duration-200
        peer-focus:top-0
        peer-focus:-translate-y-1/2
        peer-focus:backdrop-blur-xl
        peer-focus:rounded-md
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:bg-background/80
        peer-focus:font-semibold
        peer-focus:text-xs
        peer-focus:text-primary
        peer-placeholder-shown:top-1/2
        peer-placeholder-shown:-translate-y-1/2
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm"
              >
                <MessageSquare className="h-4 w-4" />
                Subject
              </label>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="relative">
              <Textarea
                id="message"
                name="message"
                rows={1}
                placeholder=" "
                onChange={() => clearError("message")}
                className={`peer resize-none bg-background/50 p-4 pt-4 transition-all focus:bg-background shadow-sm ${
                  errors.message
                    ? "border-red-500 focus-visible:ring-red-500"
                    : "hover:border-primary/50"
                }`}
                onInput={(e) => {
                  const textarea = e.currentTarget;

                  // Reset height so shrinking also works
                  textarea.style.height = "auto";

                  // Calculate 4-row maximum
                  const lineHeight = parseInt(
                    window.getComputedStyle(textarea).lineHeight,
                  );
                  const maxHeight = lineHeight * 6;

                  textarea.style.height = `${Math.min(
                    textarea.scrollHeight,
                    maxHeight,
                  )}px`;

                  // Show scrollbar only after 4 rows
                  textarea.style.overflowY =
                    textarea.scrollHeight > maxHeight ? "auto" : "hidden";
                }}
              />

              <label
                htmlFor="message"
                className={`pointer-events-none absolute left-4 top-4 flex items-center gap-2 bg-transparent px-1 text-sm font-medium text-muted-foreground transition-all duration-200
        peer-focus:top-0
        peer-focus:-translate-y-1/2
        peer-focus:backdrop-blur-xl
        peer-focus:rounded-md
        peer-focus:px-1.5
        peer-focus:py-0.5
        peer-focus:bg-background/80
        peer-focus:font-semibold
        peer-focus:text-xs
        peer-focus:text-primary
        peer-placeholder-shown:top-4
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:bg-transparent
        peer-placeholder-shown:text-sm
        ${errors.message ? "peer-focus:text-red-500" : ""}`}
              >
                <MessageCircle className="h-4 w-4" />
                Message
              </label>
            </div>

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
