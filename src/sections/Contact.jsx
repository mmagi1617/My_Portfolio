import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  User,
  MessageSquare,
  AtSign,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      type: "",
      message: "",
    });

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[130px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          {/* Small Heading */}

          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
                Get In Touch
              </span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}

          <ScrollReveal delay={100}>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Let's{" "}
              <span className="text-primary glow-text">
                Work Together
              </span>
            </h2>
          </ScrollReveal>

          {/* Description */}

          <ScrollReveal delay={200}>
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              Have a project, opportunity, or just want to say hello?
              Send me a message and I'll get back to you as soon as possible.
            </p>
          </ScrollReveal>

        </div>

        {/* ==================================================
            CONTACT AREA
        ================================================== */}

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ==================================================
              LEFT CONTACT CONTENT
          ================================================== */}

          <ScrollReveal
            direction="right"
            delay={100}
            className="h-fit"
          >
            <div className="glass h-fit rounded-2xl p-7">

              {/* Icon */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Mail className="h-6 w-6" />
              </div>

              {/* Heading */}

              <h3 className="mt-6 text-2xl font-bold">
                Let's talk.
              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                I'm always open to discussing new projects, interesting
                opportunities, and ideas related to web development.
              </p>

              {/* ================= EMAIL ================= */}

              <div className="mt-8 border-t border-border pt-6">

                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>

                <a
                  href="mailto:mmagi1617@gmail.com"
                  className="
                    mt-2
                    block
                    break-all
                    text-sm
                    font-medium
                    text-primary
                    transition-colors
                    hover:text-primary-light
                  "
                >
                  mmagi1617@gmail.com
                </a>

              </div>

              {/* ================= AVAILABILITY ================= */}

              <div className="mt-6 flex items-center gap-3">

                <span className="relative flex h-3 w-3">

                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-green-500
                      opacity-50
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-green-500
                    "
                  />

                </span>

                <span className="text-sm text-muted-foreground">
                  Available for opportunities
                </span>

              </div>

            </div>
          </ScrollReveal>

          {/* ==================================================
              CONTACT FORM
          ================================================== */}

          <ScrollReveal
            direction="left"
            delay={200}
          >
            <div
              className="
                glass-strong
                rounded-2xl
                p-6
                sm:p-8
              "
            >

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* ==================================================
                    NAME + EMAIL
                ================================================== */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* ================= NAME ================= */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Name
                    </label>

                    <div className="relative">

                      <User
                        className="
                          absolute
                          left-3
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-muted-foreground
                        "
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        minLength={2}
                        className="
                          w-full
                          rounded-xl
                          border
                          border-border
                          bg-surface/60
                          py-3
                          pl-10
                          pr-4
                          text-sm
                          text-foreground
                          outline-none
                          transition-all
                          placeholder:text-muted-foreground/50
                          focus:border-primary
                          focus:ring-2
                          focus:ring-primary/10
                        "
                      />

                    </div>
                  </div>

                  {/* ================= EMAIL ================= */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>

                    <div className="relative">

                      <AtSign
                        className="
                          absolute
                          left-3
                          top-1/2
                          h-4
                          w-4
                          -translate-y-1/2
                          text-muted-foreground
                        "
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="
                          w-full
                          rounded-xl
                          border
                          border-border
                          bg-surface/60
                          py-3
                          pl-10
                          pr-4
                          text-sm
                          text-foreground
                          outline-none
                          transition-all
                          placeholder:text-muted-foreground/50
                          focus:border-primary
                          focus:ring-2
                          focus:ring-primary/10
                        "
                      />

                    </div>

                  </div>

                </div>

                {/* ==================================================
                    SUBJECT
                ================================================== */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <div className="relative">

                    <MessageSquare
                      className="
                        absolute
                        left-3
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-muted-foreground
                      "
                    />

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-border
                        bg-surface/60
                        py-3
                        pl-10
                        pr-4
                        text-sm
                        text-foreground
                        outline-none
                        transition-all
                        placeholder:text-muted-foreground/50
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/10
                      "
                    />

                  </div>

                </div>

                {/* ==================================================
                    MESSAGE
                ================================================== */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    required
                    minLength={10}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-border
                      bg-surface/60
                      px-4
                      py-3
                      text-sm
                      text-foreground
                      outline-none
                      transition-all
                      placeholder:text-muted-foreground/50
                      focus:border-primary
                      focus:ring-2
                      focus:ring-primary/10
                    "
                  />

                </div>

                {/* ==================================================
                    STATUS MESSAGE
                ================================================== */}

                {status.message && (
                  <div
                    className={`
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      px-4
                      py-3
                      text-sm

                      ${
                        status.type === "success"
                          ? "border-green-500/20 bg-green-500/10 text-green-400"
                          : "border-red-500/20 bg-red-500/10 text-red-400"
                      }
                    `}
                  >

                    {status.type === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    )}

                    <span>
                      {status.message}
                    </span>

                  </div>
                )}

                {/* ==================================================
                    SUBMIT BUTTON
                ================================================== */}

                <button
                  type="submit"
                  disabled={isSending}
                  className="
                    btn-hover
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-primary
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-background
                    transition-all
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {isSending ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-background/30
                          border-t-background
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message

                      <Send className="h-4 w-4" />
                    </>
                  )}

                </button>

              </form>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default Contact;